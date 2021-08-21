import { props } from 'bluebird';
import React, { useState } from 'react'
const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logOut:()=>{}
})
export const AuthContextProvider=(props)=>{
    const [token,setToken]=useState(null);
    let userIsLoggedIn=!!token;
    const loginHandler=(token)=>{
        setToken(token);
    }
    const logOutHandler=()=>{
        setToken(null);
        userIsLoggedIn=!!token;

    }
    const contextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logOut:logOutHandler
    }

return(
<AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
);
}

export default AuthContext;