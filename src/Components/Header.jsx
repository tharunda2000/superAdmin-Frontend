import React from 'react'
import { useAppContext } from '../Context/Context'

const Header = () => {

    const {connectionClick,setConnectionClick,userClick,setuserClick,SecurityClick,setSecurityClick} = useAppContext();

  return (
    <div className='flex fixed h-20 md:h-30 lg:h-40 w-full left-40 left:50 md:left-60 lg:left-70 bg-gray-200 lg:px-40 items-center justify-between noto {
  font-family: "Noto Sans Mono", monospace;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
}'>
        <div>
            <h1 className='text-3xl'>Connection</h1>
            <h1 className='text-xl mt-3 '>connection settings</h1>
        </div>

        <i className="ri-information-2-fill me-60 text-3xl"></i>
      
    </div>
  )
}

export default Header
