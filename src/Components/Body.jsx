import React, { useState } from 'react'
import { useAppContext } from '../Context/Context'
import DatabaseSettings from './DatabaseSettings';

const Body = () => {

    const {} = useAppContext();
    
    
  return (
    

    <div className='flex flex-col relative bg-blue-100 min-w-full h-full noto'>
      <DatabaseSettings/>
  
    </div>
  )
}

export default Body
