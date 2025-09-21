import React, { createContext, useContext, useState } from 'react'

export const appContext = createContext();

export const Context = ({children}) => {

    const [connectionClick,setConnectionClick] = useState(true);
    const [userClick,setuserClick] = useState(false);
    const [securityClick,setSecurityClick] = useState(false);

    const [databaseCollapse,setDatabaseCollapse] = useState(true);
    const [emailCollapse,setEmailCollapse] = useState(false);
    const [smsCollapse,setSmsCollapse] = useState(false);
  
    const values = {connectionClick,setConnectionClick,userClick,setuserClick,securityClick,setSecurityClick,databaseCollapse,setDatabaseCollapse,emailCollapse,setEmailCollapse,smsCollapse,setSmsCollapse};


    return <appContext.Provider value={values}>
        {children}
    </appContext.Provider>
}

export const useAppContext = () =>{
    return useContext(appContext)
}

export default Context;
