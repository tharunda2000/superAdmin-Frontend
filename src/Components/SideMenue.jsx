import React, { useState } from 'react'
import { useAppContext } from '../Context/Context';

const SideMenue = () => {

    const [dropdown,setDropdown] = useState(false);
    const {connectionClick,setConnectionClick,userClick,setuserClick,securityClick,setSecurityClick}= useAppContext();

    const connectionItem = () =>{
        setConnectionClick(true);
        setuserClick(false);
        setSecurityClick(false); 
    }

    const userItem = () =>{
        setConnectionClick(false);
        setuserClick(true);
        setSecurityClick(false); 
    }

    const securityItem = () =>{
        setConnectionClick(false);
        setuserClick(false);
        setSecurityClick(true); 
    }

  return (
    <div className='relative flex flex-col h-screen w-60 md:w-70 lg:w-90  bg-gray-100 items-center noto '>

        <div className='flex lg:text-2xl gap-2 lg:gap-5 mt-10 lg:mt-16'>
            <i class="ri-list-settings-fill text-shadow-lg text-shadow-blue-200"></i>
            <h1 className='lg:font-bold text-shadow-lg text-shadow-blue-200'>Admin Pannel</h1>
        </div>

        <div className='flex mt-10 lg:mt-25 bg-gray-300 p-3 lg:p-6 rounded-lg  lg:gap-3 lg:w-65 '>
            <h1 className='text-xs lg:text-lg font-bold'>Application Settings</h1> 
            <i 
                class="ri-arrow-down-double-line text-xl font-bold px-1 rounded-full bg-gray-400 cursor-pointer hover:bg-black hover:text-white"
                onClick={()=>setDropdown(!dropdown)} 
            ></i> 
        </div>

        {dropdown && <div className='flex flex-col text-sm'>

            <div 
                className='flex mt-3 mx-5  bg-white p-3 lg:p-6 rounded-lg  lg:gap-3 lg:w-55 cursor-pointer hover:bg-blue-200 hover:text-blue-800 border-1'
                onClick={connectionItem}
            >
                <i class="ri-signal-wifi-error-fill text-xl"></i>
                <h1 className=''>Connection Settings</h1> 
            </div>

            <div 
                className='flex mt-3 mx-5  bg-white p-3 lg:p-6 rounded-lg  lg:gap-3 lg:w-55 cursor-pointer hover:bg-blue-200 hover:text-blue-800 border-1'
                onClick={userItem}
            >
                <i class="ri-shield-user-fill text-xl"></i>
                <h1 className=''>User Management</h1> 
            </div>

            <div 
                className='flex mt-3 mx-5  bg-white p-3 lg:p-6 rounded-lg  lg:gap-3 lg:w-55 cursor-pointer hover:bg-blue-200 hover:text-blue-800 border-1'
                onClick={securityItem}
            >
                <i class="ri-shield-fill text-xl"></i>
                <h1 className=''>Security Settings</h1> 
            </div>

        </div>}

        <div className='flex mt-2 lg:mt-3 bg-gray-300 p-3 lg:p-6 rounded-lg  lg:gap-3 lg:w-65'>
            <h1 className='text-xs lg:text-lg font-bold'>General Settings</h1> 
            <i 
                class="ri-arrow-down-double-line text-xl font-bold p-1 rounded-full bg-gray-400 cursor-pointer hover:bg-black hover:text-white"
                
            ></i> 
        </div>

    </div>
  )
}

export default SideMenue
