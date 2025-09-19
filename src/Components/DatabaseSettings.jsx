import React, { useState } from 'react'
import { useAppContext } from '../Context/Context'
import { saveDatabase } from '../services/Databaseservices';

const DatabaseSettings = () => {

    const {databaseCollapse,setDatabaseCollapse} = useAppContext();

    

    const [fields,setFields] = useState(
        {
            host:"",
            port:"",
            dbName:"",
            userName:"",
            password:""
        }
    )
    
    const cancel = () =>{
        setFields(
            {
                host:"",
                port:"",
                dbName:"",
                userName:"",
                password:""
            }
        );
    }

    const saveData = async () =>{
        try{

            const res = await saveDatabase(fields);
            console.log("User created:", res);


        }catch(error){
            console.log("error");
        }
    }

    const handleHostChange = (e) => {
        setFields({
            ...fields,
            host: e.target.value
        });
    };

    const handlePortChange = (e) => {
        setFields({
            ...fields,
            port: e.target.value
        });
    };

    const handleDbnameChange = (e) => {
        setFields({
            ...fields,
            dbName: e.target.value
        });
    };

    const handleUserChange = (e) => {
        setFields({
            ...fields,
            userName: e.target.value
        });
    };

    const handleHPassChange = (e) => {
        setFields({
            ...fields,
            password: e.target.value
        });
    };

  return (
    <div>
      <div className='flex relative bg-white mt-20 mx-10 lg:mx-70 p-5 border-1 border-blue-500 rounded-t-2xl justify-between text-sm lg:text-xl'>
          <div className='flex gap-3'>
            <i class="ri-database-2-fill"></i>
            <h1 >Database Settings</h1>
          </div>
          <i 
            class="ri-arrow-down-wide-line text-xl font-bold me-5 cursor-pointer bg-black px-1 text-white rounded-full hover:bg-blue-800"
            onClick={()=>setDatabaseCollapse(!databaseCollapse)}
          ></i>
      </div>

      {databaseCollapse && <div className='flex relative bg-white mx-10 lg:mx-70 p-5 gap-20 justify-evenly border-1 border-blue-500'>

        <div className='flex flex-col gap-4'>

            <div className='flex flex-col gap-2'>
                <h1>Host</h1>
                <input 
                    type="text" 
                    placeholder="localhost"
                    value={fields.host}
                    onChange={handleHostChange}
                    class="lg:w-100 max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
            </div>

            <div className='flex flex-col gap-2'>
                <h1>Port</h1>
                <input 
                    value={fields.port}
                    type="text" 
                    placeholder="Port number"
                    onChange={handlePortChange}
                    class="lg:w-100 max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
            </div>

            <div className='flex flex-col gap-2'>
                <h1>Database name</h1>
                <input 
                    value={fields.dbName}
                    type="text"
                    onChange={handleDbnameChange} 
                    placeholder="database name"
                    class="lg:w-100 max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
            </div>

            <div className='flex gap-5 my-5'>
                <input 
                    type="button"
                    onClick={saveData} 
                    value="Save" 
                    class="px-6 py-2 w-35 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all cursor-pointer"
                />
                <input 
                    type="button" 
                    value="✖ Cancel"
                    onClick={cancel} 
                    class="px-6 py-2 w-35 bg-gray-200 text-gray-700 font-medium rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all cursor-pointer"
                />
            </div>

        </div>

        <div className='flex flex-col gap-4'>

            <div className='flex flex-col gap-2'>
                <h1>Username</h1>
                <input 
                    value={fields.userName}
                    onChange={handleUserChange}
                    type="text" 
                    placeholder="database username"
                    class="lg:w-100w-full max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
            </div>

            <div className='flex flex-col gap-2'>
                <h1>Password</h1>
                <input 
                    value={fields.password}
                    onChange={handleHPassChange}
                    type="password" 
                    placeholder="database password"
                    class="lg:w-100 max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
            </div>

        </div>
          
      </div>}
    </div>
  )
}

export default DatabaseSettings
