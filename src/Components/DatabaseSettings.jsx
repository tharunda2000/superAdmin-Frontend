import React from 'react'
import { useAppContext } from '../Context/Context'

const DatabaseSettings = () => {

    const {databaseCollapse,setDatabaseCollapse} = useAppContext();
    
  return (
    <div>
      <div className='flex relative bg-white mt-20 mx-70 p-5 border-1 border-blue-500 rounded-t-4xl justify-between'>
          <div className='flex gap-3'>
            <i class="ri-database-2-fill"></i>
            <h1>Database Settings</h1>
          </div>
          <i 
            class="ri-arrow-down-wide-line text-xl font-bold me-5 cursor-pointer"
            onClick={()=>setDatabaseCollapse(!databaseCollapse)}
          ></i>
      </div>

      {databaseCollapse && <div className='flex relative bg-white  mx-70 p-5 '>
          
      </div>}
    </div>
  )
}

export default DatabaseSettings
