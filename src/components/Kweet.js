import { dbService } from "fBase";
import React from "react";

const Kweet=({kweetObj, isOwner})=>{
      const onDeleteClick = async () =>{
          const ok = window.confirm("Are you sure you want to delte this kweet?");
          if(ok){
            await dbService.doc(`kweets/${kweetObj.id}`).delete();
          }else{

          }

      }
    return(
   
        <div>
            <h4>{kweetObj.text}</h4>
            {isOwner && (
            <>
            <button onClick={onDeleteClick}>Delete Kweet</button>
            <button>Edit Kweet</button>
            </>
            )}
        </div>
            
)};

export default Kweet;