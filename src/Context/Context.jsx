import React, { createContext, useContext, useState } from 'react'

export const appContext = createContext();

export const Context = ({children}) => {

    const [connectionClick,setConnectionClick] = useState(true);
    const [userClick,setuserClick] = useState(false);
    const [SecurityClick,setSecurityClick] = useState(false);
  
    const values = {connectionClick,setConnectionClick,userClick,setuserClick,SecurityClick,setSecurityClick};


    return <appContext.Provider value={values}>
        {children}
    </appContext.Provider>
}

export const useAppContext = () =>{
    return useContext(appContext)
}

export default Context;
