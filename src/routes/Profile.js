import React, { useEffect, useState } from "react";
import { authService, dbService } from "fBase";
import { useHistory } from "react-router";


export default ({refreshUser,userObj}) =>{
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

    const onLogOutClick = () => {
        authService.signOut();
        history.push("/")
    }

    const onChange =(event)=>{
        const {
            target:{value},
        }=event;
        setNewDisplayName(value);
    };
    const onSubmit = async (event)=>{
        event.preventDefault();
        if(userObj.displayName !== newDisplayName){
            await userObj.updateProfile({
                displayName: newDisplayName,
            });
            refreshUser();
        }
    }

    const getMyKweets = async () => {
        const kweets = await dbService
        .collection("kweets")
        .where("creatorid","==",userObj.uid)
        .orderBy("createdAt","desc")
        .get();

        console.log(kweets.docs.map((doc) => doc.data()));

    };
    useEffect(()=>{
        getMyKweets();
    },[]);


    return (
        <div className="container">

        <form onSubmit={onSubmit}>
            
         <div>
            <input
            onChange={onChange}
            type="text"
            placeholder="Display name"
            value={newDisplayName}
            className="wefl_my_profile"
            />
            <input type="submit" value="Update Profile" style={{border:"black 1px solid" , padding:"9px"}}/>
           
            <span className="wefl_logout_btn">
            <button onClick={onLogOutClick}>Log Out</button>
             </span>  
         </div>
        </form>
      
        
        </div>
    );
};