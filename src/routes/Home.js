import React, { useEffect, useState } from "react";
import { dbService, storageService } from "fBase";
import Kweet from "components/Kweet"
import KweetFactory from "components/KweetFactory";

const Home =({userObj})=>{
    console.log(userObj)
    const [kweets,setKweets] =useState([]);

        useEffect(()=>{
            // getKweets();
            dbService.collection("kweets").onSnapshot((snapshot)=>{
                
                const kweetArray=snapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data(),
            }));
            setKweets(kweetArray);
            });
        },[]);

return(
<div className="container">
    <KweetFactory userObj={userObj}/>
    <div>
        {kweets.map((kweet)=>(
        <Kweet key={kweet.id} kweetObj={kweet} isOwner={kweet.creatorId===userObj.uid}/>
            ))}
    </div>
</div>
)};
export default Home;