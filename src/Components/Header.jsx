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

        <i className="ri-information-2-fill lg:text-3xl cursor-pointer hover:text-green-600"></i>
      
    </div>
  )
}

export default Header
