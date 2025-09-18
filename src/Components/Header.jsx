import React from 'react'
import { useAppContext } from '../Context/Context'

const Header = () => {

    const {connectionClick,setConnectionClick,userClick,setuserClick,securityClick,setSecurityClick} = useAppContext();

  return (
    <div className='flex fixed h-20 md:h-30 lg:h-40 w-full left-40 left:50 md:left-60 lg:left-70 bg-gray-200 lg:px-40 items-center justify-between noto'>
        {connectionClick && <div>
            <h1 className='text-3xl font-bold'>Connection Settings</h1>
            <h1 className='text-xl mt-3 '>Configure database, email, and SMS connections</h1>
        </div>}

        {userClick && <div>
            <h1 className='text-3xl font-bold'>User Management</h1>
            <h1 className='text-xl mt-3 '>Register, Remove or update users</h1>
        </div>}

        {securityClick && <div>
            <h1 className='text-3xl font-bold'>Security Settings</h1>
            <h1 className='text-xl mt-3 '>All security configerations</h1>
        </div>}

        <i className="ri-information-2-fill me-60 text-3xl"></i>
      
    </div>
  )
}

export default Header
