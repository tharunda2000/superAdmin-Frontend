import React, { useState } from 'react'
import { useAppContext } from '../Context/Context'
import DatabaseSettings from './DatabaseSettings';
import EmailSettings from './EmailSettings';
import SMSSettings from './SMSSettings';

const Body = () => {

    const {connectionClick} = useAppContext();
    
    
  return (
    

    <div className="flex flex-col relative bg-blue-100 min-w-full h-screen overflow-y-auto font-noto pb-50 ">
      
      {connectionClick && <div>
        <DatabaseSettings />
        <EmailSettings/>
        <SMSSettings/>
      </div>}

    </div>
  )
}

export default Body
