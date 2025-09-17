import React, { useState } from 'react'

const SideMenue = () => {

    const [dropdown,setDropdown] = useState(false);

  return (
    <div className='fixed flex flex-col h-screen w-40 md:w-60 top-0 lg:w-70 left-0 bg-gray-100 items-center'>

        <div className='flex lg:text-2xl gap-2 lg:gap-5 mt-10 lg:mt-16'>
            <i class="ri-list-settings-fill text-shadow-lg text-shadow-blue-200"></i>
            <h1 className='lg:font-bold text-shadow-lg text-shadow-blue-200'>Admin Pannel</h1>
        </div>

        <div className='flex mt-10 lg:mt-25 bg-gray-300 p-3 lg:p-6 rounded-lg  lg:gap-3 lg:w-65 '>
            <h1 className='text-xs lg:text-lg'>Application Settings</h1> 
            <i 
                class="ri-arrow-down-double-line text-xl font-bold px-1 rounded-full bg-gray-400 cursor-pointer hover:bg-black hover:text-white"
                onClick={()=>setDropdown(!dropdown)} 
            ></i> 
        </div>

        {dropdown && <div className='flex flex-col text-sm'>

            <div className='flex mt-3 mx-5  bg-gray-300 p-3 lg:p-6 rounded-lg  lg:gap-3 lg:w-55 cursor-pointer hover:bg-blue-200 hover:text-blue-800'>
                <i class="ri-signal-wifi-error-fill"></i>
                <h1 className=''>Connection Settings</h1> 
            </div>

            <div className='flex mt-3 mx-5  bg-gray-300 p-3 lg:p-6 rounded-lg  lg:gap-3 lg:w-55 cursor-pointer hover:bg-blue-200 hover:text-blue-800'>
                <i class="ri-shield-user-fill"></i>
                <h1 className=''>User Management</h1> 
            </div>

            <div className='flex mt-3 mx-5  bg-gray-300 p-3 lg:p-6 rounded-lg  lg:gap-3 lg:w-55 cursor-pointer hover:bg-blue-200 hover:text-blue-800'>
                <i class="ri-shield-fill"></i>
                <h1 className=''>Security Settings</h1> 
            </div>

        </div>}

        <div className='flex mt-2 lg:mt-3 bg-gray-300 p-3 lg:p-6 rounded-lg  lg:gap-3 lg:w-65'>
            <h1 className='text-xs lg:text-lg'>General Settings</h1> 
            <i 
                class="ri-arrow-down-double-line text-xl font-bold px-1 rounded-full bg-gray-400 cursor-pointer hover:bg-black hover:text-white"
                
            ></i> 
        </div>

    </div>
  )
}

export default SideMenue
