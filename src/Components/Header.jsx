import React from 'react'
import { useAppContext } from '../Context/Context'

const Header = () => {

    const {connectionClick,setConnectionClick,userClick,setuserClick,securityClick,setSecurityClick} = useAppContext();

  return (
    <div className='flex relative h-20 md:h-30 lg:h-40  bg-gray-200 px-3 lg:px-40 items-center justify-between noto '>
        {connectionClick && <div>
            <h1 className='text-sm lg:text-3xl font-bold'>Connection Settings</h1>
            <h1 className='text-xs  lg:text-xl mt-3'>Configure database, email, and SMS connections</h1>
        </div>}

        {userClick && <div>
            <h1 className='text-sm lg:text-3xl font-bold'>User Management</h1>
            <h1 className='text-xs  lg:text-xl mt-3'>Register, Remove or update users</h1>
        </div>}

        {securityClick && <div>
            <h1 className='text-sm lg:text-3xl font-bold'>Security Settings</h1>
            <h1 className='text-xs  lg:text-xl mt-3'>All security configerations</h1>
        </div>}

        <div className="relative group me-10">
            <i className="ri-information-2-fill lg:text-3xl cursor-pointer hover:text-green-600"></i>
            
            {connectionClick && <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-100 z-10 px-3 py-1 rounded-lg bg-gray-700 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            In this section, you can configure and manage the system’s Database, Email, and SMS connections. Updating these settings ensures the application can store data, send notifications, and deliver SMS alerts reliablyThis section shows contextual information
            </div>}

            {userClick && <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-100 z-10 px-3 py-1 rounded-lg bg-gray-700 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            This section allows administrators to register new users, update user details, or remove existing users to keep the system’s access up to date
            </div>}

            {securityClick && <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-100 z-10 px-3 py-1 rounded-lg bg-gray-700 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            This section provides all security configurations, including access controls and system protection settings, to ensure secure operation of the application
            </div>}

        </div>
      
    </div>
  )
}

export default Header
