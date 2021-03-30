import { dbService, storageService } from "fBase";
import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const KweetFactory = ({userObj}) =>{
    const [kweet,setKweet]=useState("");
    const [attachment, setAttachment]= useState("");

    const onSubmit= async (event)=>{
        if (kweet === "") {
            return;
          }

        event.preventDefault();
        let attachmentUrl="";
       if(attachment!==""){
        const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
        const response= await attachmentRef.putString(attachment, "data_url");
        attachmentUrl= await response.ref.getDownloadURL();
       };
       const kweetObj = {
            text:kweet,
            createdAt:Date.now(),
            creatorId:userObj.uid,
            attachmentUrl,
        }
        await dbService.collection("kweets").add(kweetObj);
        setKweet("");
        setAttachment("");
    }
    const onChange=(event)=>{
        const {target:{value},
    }=event;
    setKweet(value);
    };
    
    const onFileChange=(event)=>{
        const {target:{files},
        }=event;
        const theFile=files[0];
        console.log(theFile);
        const reader= new FileReader();
        reader.onloadend= (finishedEvent)=>{
            const{
                currentTarget:{result},
        }=finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    }

    const onClearAttachmentClick=()=>setAttachment("");

return (


<>
{attachment ? 
 <div className="wefl_container">
     <div className="wefl_post wd1000">
        <div className="wefl_post_header factoryForm__clear" onClick={onClearAttachmentClick}>
            {attachment && 
            <>
            <span>Remove</span>
            <FontAwesomeIcon icon={faTimes} />
            </>
            }
           
        </div>
        <div>
        <img
            src={attachment}
            style={{
              backgroundImage: attachment,
            }}
          />
        </div>
        <div className="wefl_post_img_add">
        {!attachment &&
                     <label for="attach-file" >
                        <span>Add photos</span>
                        <FontAwesomeIcon icon={faPlus} />
                    </label>
                     }
        </div>

        <div className="wefl_post_text">               
              <form onSubmit={onSubmit} className="factoryForm">
                    <div className="factoryInput__container_img">
                        <textarea
                        className="wefl_post_textarea"
                        value={kweet}
                        onChange={onChange}
                        placeholder="What's on your mind?"
                        maxLength={200}
                        />

                    <input
                        id="attach-file"
                        type="file"
                        accept="image/*"
                        onChange={onFileChange}
                        style={{
                        opacity: 0,
                        }}
                    />
                         <div className="arrow_btn" >
                               <input type="submit" value="Kweet &rarr;" className="cursor" />
                         </div>
                    </div>
                    
                    
                </form>
        </div>
       

     </div>

 </div>

:
    <div>
        {attachment && (
            <div className="wefl_post">
            <div className="factoryForm__clear" onClick={onClearAttachmentClick}>
            <span>Remove</span>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        <div className="factoryForm__attachment">
          <img
            src={attachment}
            style={{
              backgroundImage: attachment,
            }}
          />
          
        </div>
        </div>
      )}
    <form onSubmit={onSubmit} className="factoryForm">
      <div className="factoryInput__container">
        <input
          className="factoryInput__input"
          value={kweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="&rarr;" className="factoryInput__arrow cursor" />
      </div>
      <label for="attach-file" className="factoryInput__label">
        <span>Add photos</span>
        <FontAwesomeIcon icon={faPlus} />
      </label>
      <input
        id="attach-file"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{
          opacity: 0,
        }}
      />
      
 </form>
</div>
}
</>
)

};

export default KweetFactory;