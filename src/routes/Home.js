import React, { useEffect, useState } from "react";
import { dbService } from "fBase";



const Home =({userObj})=>{
    console.log(userObj)
    const [kweet,setKweet]=useState("");
    const [kweets,setKweets] =useState([]);
    
    // const getKweets= async ()=>{
    //     const dbKweets= await dbService.collection("kweets").get();
    //     console.log(dbKweets);
    //     dbKweets.forEach((document)=>{
    //         const kweetObject= {
    //             ...document.data(), 
    //             id: document.id,
                
    //         };
    //         setKweets((prev)=>[kweetObject, ...prev]);
    //     }); 
    // }; old one


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

    const onSubmit= async (event)=>{
        event.preventDefault();
        await dbService.collection("kweets").add({
            text:kweet,
            createdAt:Date.now(),
            creatorId:userObj.uid,
            
        });
        setKweet("");
    }
    const onChange=(event)=>{
        const {target:{value},
    }=event;
    setKweet(value);
    };
    
return(
<div>
    <form onSubmit={onSubmit}>
        <input onChange={onChange} value={kweet} type="text" placeholder="What's on your mind?" maxLength={120}/>
        <input type="submit" value="Kweet"/>
    </form>
    <div>
        {kweets.map((kweet)=>(
        <div key={kweet.id}>
            <h4>{kweet.text}</h4>
        </div>
            ))}
    </div>
</div>

)
}

export default Home;