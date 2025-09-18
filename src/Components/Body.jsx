import React, { useState } from 'react'
import { useAppContext } from '../Context/Context'
import DatabaseSettings from './DatabaseSettings';
import EmailSettings from './EmailSettings';

const Body = () => {

    const {} = useAppContext();
    
    
  return (
    

    <div className="flex flex-col relative bg-blue-100 min-w-full h-screen overflow-y-auto font-noto ">
      <DatabaseSettings />
      <EmailSettings/>
    </div>
  )
}

export default Body
