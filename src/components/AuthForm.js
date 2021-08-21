import { Button } from 'bootstrap'
import React, { useContext, useRef }  from 'react'
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components'
import AuthContext from '../context/auth_context';


const AuthForm=()=>{

const history=useHistory();

const userEmail=useRef(null);
const userPass=useRef(null);
const authContext=useContext(AuthContext);

const getAuthentication=()=>{
    const enteredUserEmail=userEmail.current.value;
    const enteredUserPass=userPass.current.value;
    if(enteredUserEmail!==""&&enteredUserPass!==""){
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAEQysNwosXk95fcF36nVXedL_6W2d52o4',
            {
                method:'POST',
                body:JSON.stringify({
                    email:enteredUserEmail,
                    password:enteredUserPass,
                    returnSecureToken:true

                })
            }
            ).then(res=>{
                if(res.ok){
                    return res.json();
                }
                else{
                   return res.json().then(data=>{
                        const errorMessage=data.error.errorMessage;
                        throw new Error(errorMessage);
                    })
                   
                }
            }).then(data=>{
                authContext.login(data.idToken);
                history.replace("/")

            }).catch(err=>{
                alert(err.message);
            })
    }else{
        alert("UserEmail/Password can't be blank");
    }
}

return(
<Wrapper>
    <div>

            <div className="form">
            <div className="form-header"><h5>Login Form</h5></div>

                <div  className="control">
                    
                    <label for="login_email">Email Address</label>
                    <input type="email" id="login_email" name="login_email"  placeholder="Email" className="text-input" ref={userEmail}/>
                    <label for="login_password">Password</label>
                    <input type="password" id="login_password" name="login_password" placeholder="password" className="text-input" ref={userPass}/>
                    <input type="button" value="Login" className="btnLogin" onClick={getAuthentication}/>

                   <div className="reset_password"><Link to="/resetPassword"> <h5>Forgot password?</h5></Link></div>
                   <div className="reset_password"><span>Don't have account?</span><Link to="/signUp">  Sign up</Link></div>
               
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
.reset_password{
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
export default AuthForm;