import React, { createContext, useContext, useState } from 'react'

export const appContext = createContext();

export const Context = ({children}) => {

    const [connectionClick,setConnectionClick] = useState(true);
    const [userClick,setuserClick] = useState(false);
    const [securityClick,setSecurityClick] = useState(false);

    const [databaseCollapse,setDatabaseCollapse] = useState(false);
    const [emailCollapse,setEmailCollapse] = useState(true);
  
    const values = {connectionClick,setConnectionClick,userClick,setuserClick,securityClick,setSecurityClick,databaseCollapse,setDatabaseCollapse,emailCollapse,setEmailCollapse};


    return <appContext.Provider value={values}>
        {children}
    </appContext.Provider>
}

export const useAppContext = () =>{
    return useContext(appContext)
}

export default Context;
