import React ,{useState} from 'react';
import './Loginsignup.css'
import user_icon from './assets/person.png'
import pass_icon from './assets/password.png'
import mail_icon from './assets/email.png'


const Loginsignup=() => {
const [c,setC]=useState("sign up");

   
   

  return (
    
   

    <div className='container'>
 
<div className='header'>
<div className='text'>{c}</div>
<div className='underline'></div>
 </div>
   <div className='inputs'>
   {
    c==="login"?<div></div>:
    <div className='input'>

<img src={user_icon} alt=""/>
<input type='text' placeholder='Name'/> 
</div>
   }
   
   
  
   <div className='input'>
    <img src={mail_icon} alt=""/>
    <input type='email' placeholder='E-mail'/> 
   </div>
   <div className='input'>
    <img src={pass_icon} alt=""/>
    <input type='password' placeholder='Password'/> 
   </div>
   {c==="login"?<div className='forget-password'>forgot password ? <span> <a>click here</a></span></div>:<div></div>}
  
   <div className='submit-container'>
   
   <div className={c==="login"?"submit white":"submit"} onClick={()=>{setC("sign up")}}>sign up</div>
   <div className={c==="sign up"?"submit white":"submit"}onClick={()=>{setC("login")}} >login</div>
   </div>


   </div>
    </div>
  )
}

export default Loginsignup;