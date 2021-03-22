import React, { useEffect, useState } from "react";
import { dbService } from "fBase";



const Home =()=>{
    const [kweet,setKweet]=useState("");
    const [kweets,setKweets] =useState([]);
    const getKweets= async ()=>{
        const dbKweets= await dbService.collection("kweets").get();
        console.log(dbKweets);
        dbKweets.forEach((document)=>{
            const kweetObject= {
                ...document.data(),
                id: document.id,
            };
            setKweets((prev)=>[kweetObject, ...prev]);
        }); 
    };
        useEffect(()=>{
            getKweets();
        },[]);

    const onSubmit= async (event)=>{
        event.preventDefault();
        await dbService.collection("kweets").add({
            kweet,
            createdAt:Date.now(),
        });
        setKweet("");
    }
    const onChange=(event)=>{
        const {target:{value},
    }=event;
    setKweet(value);
    };
    console.log(kweets);
    console.log(kweets.kweet+"올시다");
return(
<div>
    <form onSubmit={onSubmit}>
        <input onChange={onChange} value={kweet} type="text" placeholder="What's on your mind?" maxLength={120}/>
        <input type="submit" value="Kweet"/>
    </form>
    <div>
        {kweets.map((kweet)=>(
        <div key={kweet.id}>
            <h4>{kweet.kweet}</h4>
        </div>
            ))}
    </div>
</div>

)
}

export default Home;