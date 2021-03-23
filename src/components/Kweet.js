import { dbService } from "fBase";
import React, { useState } from "react";

const Kweet=({kweetObj, isOwner})=>{
    const [editing, setEditing]= useState(false);
    const [newKweet, setNerKweet]=useState(kweetObj.text);
      const onDeleteClick = async () =>{
          const ok = window.confirm("Are you sure you want to delte this kweet?");
          if(ok){
            await dbService.doc(`kweets/${kweetObj.id}`).delete();
          }else{

          }

      }

      const toggleEditing = () => setEditing((prev)=>!prev);
      const onSubmit=async (event)=>{
          event.preventDefault();
          console.log(kweetObj, newKweet);
        await dbService.doc(`kweets/${kweetObj.id}`).update({
            text:newKweet,
        });
        setEditing(false);//에디팅 모드를 끝낸다 
      }
      const onChange=(event)=>{
          const {target:{value},
        }=event;
        setNerKweet(value);
      }

    return(
   
        <div>
           {editing ? (
               <>
               <form onSubmit={onSubmit}>
                   <input type="text" value={newKweet}
                    placeholder="Edit your kweet" 
                   required
                   onChange={onChange}/>
                   <input type="submit" value="Update Kweet"/>
               </form>
               <button onClick={toggleEditing}>Cancel</button>
               </>
           ):(
               <>
            <h4>{kweetObj.text}</h4>
            {isOwner && (
            <>
            <button onClick={onDeleteClick}>Delete Kweet</button>
            <button onClick={toggleEditing}>Edit Kweet</button>
            </>
            )}
           </>
           )}
        </div>
            
    )};

export default Kweet;