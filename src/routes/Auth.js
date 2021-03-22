import React, { useState } from "react";
import { authService, firebaseInstance } from "fBase";


const Auth = ()=>{
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [newAccount , setNewAcount] = useState(true);
    const [error, setError] = useState("");
    console.log("newAccout: "+newAccount)

    const onChange=(event)=>{
    const{
        target:{name,value},
    } = event;

    console.log("value:"+value)

    if(name==="email"){
        setEmail(value);
    }else if(name==="password"){
        setPassword(value);
    }    
};
    const onSubmit= async (event)=>{
         event.preventDefault(); //기본 설정을 막고 내가 컨트롤을 가져가게 하는 것 
        try{
            let data;
            if(newAccount){
                 data = await authService.createUserWithEmailAndPassword(
                    email,
                    password
                );
            }else{
                 data = await authService.signInWithEmailAndPassword(
                    email,
                    password
                );
            }
            console.log("newAcount: "+newAccount)
            console.log("data : "+ data);
        }catch(error){
            setError(error.message);
       }
    }
    const toggleAccount=()=> setNewAcount((prev)=>!prev);
    
    const onSocailClick= async (event)=>{
            console.log(event.target.name);

            const{
            target:{name},
        }=event;
        let provider;
        if(name==="google"){
            provider=new firebaseInstance.auth.GoogleAuthProvider();
        }else if(name==="github"){
            provider=new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        console.log(data);
    };
    
    
return(
    <div>
        <form onSubmit={onSubmit}> 
            <input name ="email" type="email" placeholder="Email" required  value={email} onChange={onChange}/>
            <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
            <input type="submit" value={newAccount ? "Create Account" : "Log In"}/>         
            {error}
        </form>
        <span onClick={toggleAccount}>{newAccount ? "Sign In":"Create Account"}</span>
        <div>
            <button name="google" onClick={onSocailClick}>Continue with Google</button>
            <button name="github" onClick={onSocailClick}>Continue with Github</button>
        </div>
    </div>
);
};
export default Auth;