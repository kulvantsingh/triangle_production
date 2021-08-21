import { Button } from 'bootstrap'
import React, { useRef }  from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const SignUpForm=()=>{

    const userEmailRef=useRef(null);
    const userPassRef=useRef(null);
    const userRetypePassRef=useRef(null);

    const signUpSubmit=()=>{
        
        const userEmail=userEmailRef.current.value;
        const userPassword=userPassRef.current.value;
        const userRetypePass=userRetypePassRef.current.value
        if(userEmail!==""&&userPassword!==""&&userRetypePass!==""){
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAEQysNwosXk95fcF36nVXedL_6W2d52o4',
            {
                method:'POST',
                body:JSON.stringify({
                    email:userEmail,
                    password:userPassword,
                    returnSecureToken:true
                }),
                headers:{
                    'Content-Type':'application/json'
                }
            }
            
            ).then(
                res=>{
                    if(res.ok){
                        alert("User Registered Successfully");
                    }else{
                        res.json().then(data=>{
                            console.log(data)
                        })
                        alert("Something went wrong,Please try again");
                    }
                }
            );

        }else{
            alert("Please enter all form fields")
        }
    }
return(
<Wrapper>
    <div>

            <div className="form">
            <div className="form-header"><h5>SignUp Form</h5></div>

                <div  className="control">
                    
                    <label for="login_email">Email Address</label>
                    <input type="email" id="login_email" name="login_email"  placeholder="Email" className="text-input" ref={userEmailRef}/>
                    <label for="login_password">Password</label>
                    <input type="password" id="login_password" name="login_password" placeholder="Password" className="text-input" ref={userPassRef}/>
                    <label for="login_password">Retype Password</label>
                    <input type="password" id="retype_login_password" name="retype_login_password" placeholder="Retype Password" className="text-input" ref={userRetypePassRef}/>
                    <input type="button" value="SignUp" className="btnLogin" onClick={signUpSubmit}/>
                   <div className="alreadyAccount"><span>Already have account?</span><Link to="/auth"> Login</Link></div>
               
                </div> 
            </div>
    </div>
</Wrapper>
);
}
const Wrapper = styled.div`
display:flex;
align-items:center;
flex-direction:column;
min-height:60vh;
background-color:#fbfbfb;
width:90vw;
.form{
    width:100%;
    max-width:450px;
    border-radius:5px;
    padding:50px;
    margin-bottom:40px;
    box-shaddow:0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.6);
}

.control{
    margin-bottom:24px;
    text-align:left;
    label{
        display:inline-block;
        margin-bottom:0.5rem;
        color:#888888;
    }
}
label{
    display:inline-block;
    margin-bottom:0.5rem;
    color:#888888
}
.form-header {
  align-items: center;
  text-align: center;
 

}

form{

  width:auto;
  padding:auto;
  
 
}
.alreadyAccount{
    margin-top:4rem;
}
.text-input{
    width:100%;
    outline:none;
   
    border:1px solid #e0e6e8;
    border-radius:4px;
    font-size:1rem;
    color:#888888;
    height:2.5rem;
    transition:box-shadow 0.2s;
    &::placeholder{
    color:#dedede;
    }
    &:focus{
        box-shadow:0 0 0 2px rgb(169,172,255,0.5)
    }
  }
  
  .btnLogin {
   
    border:1px solid black;
    width:100%;
    padding: 0.25rem 0;
    font-weight:500;
    font-size:1rem;
    line-weight:1.5;
    margin-top:1rem;;
    transition:all 0.2s;
    text-transform: capitalize;
    background:var(--clr-grey-5);
    border-color: transparent;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    cursor: pointer;
    float:left;
    &:hover{
        background-color:#0072ff;
        color:#ffffff;
    }
  }

  
  

  

 
`
export default SignUpForm;