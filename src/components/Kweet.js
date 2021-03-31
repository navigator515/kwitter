import { dbService, storageService } from "fBase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Kweet=({kweetObj, isOwner})=>{
    const [editing, setEditing]= useState(false);
    const [newKweet, setNewKweet]=useState(kweetObj.text);
      const onDeleteClick = async () =>{
          const ok = window.confirm("Are you sure you want to delete this kweet?");
          if(ok){
            await dbService.doc(`kweets/${kweetObj.id}`).delete();
            await storageService.refFromURL(kweetObj.attachmentUrl).delete();
          }

      }

      const toggleEditing = () => setEditing((prev)=>!prev);

      const onSubmit=async (event)=>{
          event.preventDefault();
        await dbService.doc(`kweets/${kweetObj.id}`).update({
            text:newKweet,
        });
        setEditing(false);//에디팅 모드를 끝낸다 
      }
      const onChange=(event)=>{
          const {target:{value},
        }=event;
        setNewKweet(value);
      }

    return(
            <div>
           {editing ? (
               <>
               {isOwner &&(
                   <>
               <form onSubmit={onSubmit}
                    className="container nweetEdit">
                   <input type="text" value={newKweet}
                    placeholder="Edit your kweet" 
                   required
                   autoFocus
                   onChange={onChange}
                   className="formInput"
                   />
                   <input type="submit" value="Update Kweet" className="formBtn"/>
                   <span onClick={toggleEditing} className="formBtn cancelBtn">
                   Cancel
                    </span> 
               </form>
                            </>
               )}
               </>
              
            ):
           (
            
             <div className="wefl_container">
              <div className="wefl_post">
                <div className="wefl_post_header">

                    <h4 className="font_weight_bold">유저 이름</h4>
                     <span>업로드 날짜</span>
                        <span>
                            {isOwner && (
                             <div className="nweet__actions">
                            <span onClick={onDeleteClick}>
                                <FontAwesomeIcon icon={faTrash} />
                            </span>
                            <span onClick={toggleEditing}>
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </span>
                        </div>
                                )}
                     </span>
                 </div>

                        <div>
                        {kweetObj.attachmentUrl &&(
                        <img src={kweetObj.attachmentUrl} />
                                                )
                        }
                     </div>
                            <div className="wefl_post_text">
                            <h4>{kweetObj.text}</h4>
                            </div>

                            <div className="wefl_post_footer">
                                <h4> 댓글..</h4>
                              </div>
                    </div>
                   

                </div>
           
            
             )
                }
          
            
            </div>
    )
}
export default Kweet;