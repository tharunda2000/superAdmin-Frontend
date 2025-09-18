import React from 'react'
import { useAppContext } from '../Context/Context'

const SMSSettings = () => {

    const {smsCollapse,setSmsCollapse} = useAppContext();

  return (

    <div>
      <div className='flex relative bg-white mt-20 mx-10 lg:mx-70 p-5 border-1 border-blue-500 rounded-t-4xl justify-between text-sm lg:text-xl'>
          <div className='flex gap-3'>
            <i class="ri-message-2-fill"></i>
            <h1 >SMS Settings</h1>
          </div>
          <i 
            class="ri-arrow-down-wide-line text-xl font-bold me-5 cursor-pointer"
            onClick={()=>setSmsCollapse(!smsCollapse)}
          ></i>
      </div>

      {smsCollapse && <div className='flex relative bg-white mx-10 lg:mx-70 p-5 gap-20 justify-evenly border-1 border-blue-500'>

        <div className='flex flex-col gap-4'>

            <div className='flex flex-col gap-2'>
                <h1>Provider Name</h1>
                <input 
                    type="text" 
                    placeholder="service provider name"
                    class="lg:w-100 max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
            </div>

            <div className='flex flex-col gap-2'>
                <h1>API key</h1>
                <input 
                    type="password" 
                    placeholder="authantication key"
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
                <h1>Sender ID</h1>
                <input 
                    type="text" 
                    placeholder="sender's id"
                    class="lg:w-100 w-full max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
            </div>

            

        </div>
          
      </div>}
    </div>
  )
}

export default SMSSettings
