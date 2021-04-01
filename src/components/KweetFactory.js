import { dbService, storageService } from "fBase";
import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const KweetFactory = ({userObj}) =>{
    const [kweet,setKweet]=useState("");
    const [attachment, setAttachment]= useState("");

    //제출 시 동작 함수
    const onSubmit= async (event)=>{
        if (kweet === "") // 아무것도 입력 안했을 시에 그냥 return 
         {
            return;
          }

        event.preventDefault();//contorll 가져오고
        let attachmentUrl="";    
       if(attachment!=="")//사진이 있다면
       {
         //사진을 fireStorage 에 올리고 url 을 다운 받는다  
        const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
        const response= await attachmentRef.putString(attachment, "data_url");
        attachmentUrl= await response.ref.getDownloadURL();
       };
       //트윗 객체 생성
       const kweetObj = {
            text:kweet,
            createdAt:Date.now(),
            creatorId:userObj.uid,
            attachmentUrl,
        }
        //fire DB 에 트윗 객체 저장
        await dbService.collection("kweets").add(kweetObj);
        // 저장 후에는 다시 초기화 시켜 준다.
        setKweet("");
        setAttachment("");
    }
    //입력을 해서 변화가 생겼을 때 
    //입력 창이 하나 이므로 그냥 한개의 event 만 받아서 target 에 넣어주고 setKweet 해준다 
    //결국 입력 값을 보여주는 함수
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
 {/* //사진 첨부 기능은 넣지만 보여주지는 않는다  */}
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
//이상 이미지 처부한 경우 
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
      {/* //사진 첨부 기능은 넣지만 보여주지는 않는다  */}
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