import React from 'react'
import { useAppContext } from '../Context/Context'

const EmailSettings = () => {

    const {emailCollapse,setEmailCollapse} = useAppContext();

  return (
    <div>
      <div className='flex relative bg-white mt-20 mx-10 lg:mx-70 p-5 border-1 border-blue-500 rounded-t-2xl justify-between text-sm lg:text-xl'>
          <div className='flex gap-3'>
            <i class="ri-mail-fill"></i>
            <h1 >Email Settings</h1>
          </div>
          <i 
            class="ri-arrow-down-wide-line text-2xl font-bold me-5 cursor-pointer bg-black px-1 text-white rounded-full hover:bg-blue-800"
            onClick={()=>setEmailCollapse(!emailCollapse)}
          ></i>
      </div>

      {emailCollapse && <div className='flex relative bg-white mx-10 lg:mx-70 p-5 gap-20 justify-evenly border-1 border-blue-500'>

        <div className='flex flex-col gap-4'>

            <div className='flex flex-col gap-2'>
                <h1>SMTP Host</h1>
                <input 
                    type="text" 
                    placeholder="smtp host name"
                    class="lg:w-100 max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
            </div>

            <div className='flex flex-col gap-2'>
                <h1>SMTP Port</h1>
                <input 
                    type="text" 
                    placeholder="smtp port number"
                    class="lg:w-100 max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
            </div>

            <div className='flex flex-col gap-2'>
                <h1>From</h1>
                <input 
                    type="text" 
                    placeholder="from address"
                    class="lg:w-100 max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
            </div>

            <div className='flex gap-5 my-5'>
                <input 
                    type="button" 
                    value="Save" 
                    class="px-6 py-2 w-35 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all cursor-pointer"
                />
                <input 
                    type="button" 
                    value="✖ Cancel" 
                    class="px-6 py-2 w-35 bg-gray-200 text-gray-700 font-medium rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all cursor-pointer"
                />
            </div>

        </div>

        <div className='flex flex-col gap-4'>

            <div className='flex flex-col gap-2'>
                <h1>Username</h1>
                <input 
                    type="text" 
                    placeholder="database username"
                    class="lg:w-100w-full max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
            </div>

            <div className='flex flex-col gap-2'>
                <h1>Password</h1>
                <input 
                    type="text" 
                    placeholder="database password"
                    class="lg:w-100 max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
            </div>

        </div>
          
      </div>}
    </div>
  )
}

export default EmailSettings
