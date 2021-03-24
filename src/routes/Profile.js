import React, { useEffect, useState } from "react";
import { authService, dbService } from "fBase";
import { useHistory } from "react-router";


export default ({userObj}) =>{
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
        <>
        <form onSubmit={onSubmit}>
            <input
            onChange={onChange}
            type="text"
            placeholder="Display name"
            value={newDisplayName}
            />
            <input type="submit" value="Update Profile"/>
        </form>
        <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};