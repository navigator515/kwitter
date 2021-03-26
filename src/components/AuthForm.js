import { authService } from "fBase";
import React, { useState } from "react";

const AuthForm =() =>{
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
    return(
 <>
   <form onSubmit={onSubmit}  className="container"> 
        <input className="authInput" name ="email" type="email" placeholder="Email" required  value={email} onChange={onChange}/>
        <input className="authInput" name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
        <input className="authInput authSubmit" type="submit" value={newAccount ? "Create Account" : "Log In"}/>         
        {error && <span className="authError">{error}</span>}
    </form>
    <span onClick={toggleAccount} className="authSwitch">{newAccount ?
     "Sign In"
     :
     "Create Account"}</span>
    </>
    )
}
export default AuthForm;