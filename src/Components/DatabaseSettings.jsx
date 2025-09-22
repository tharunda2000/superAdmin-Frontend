import React, { useState } from 'react'
import { useAppContext } from '../Context/Context'
import { saveDatabase } from '../services/Databaseservices';
import toast, { Toaster } from 'react-hot-toast';

const DatabaseSettings = () => {

    const {databaseCollapse,setDatabaseCollapse} = useAppContext();
    const [visible,setVisible] = useState(false);
    

    const [fields,setFields] = useState(
        {
            host:"",
            port:"",
            databaseName:"",
            username:"",
            password:""
        }
    )
    
    const cancel = () =>{
        setFields(
            {
                host:"",
                port:"",
                databaseName:"",
                username:"",
                password:""
            }
        );
    }

    const success = () => toast.success('Settings saved successfully', {
                          duration: 2000
                        })

    const notifyFail = () => toast.error('Failed to save settings', {
                          duration: 2000
                         })

    const HostBlank = () => toast.error('Host is required', {
                          duration: 2000
                         })
    const portErr = () => toast.error('Port must be a number', {
                          duration: 2000
                         })
    const dataNameBlank = () => toast.error('Database name is required', {
                          duration: 2000
                         })

    const userBlank = () => toast.error('Username is required', {
                          duration: 2000
                         })

    const passErr = () => toast.error('Password must be at least 8 characters long', {
                          duration: 2000
                         })
    const saveData = async () =>{
        try{

             if (!fields.host.trim()) {
                HostBlank();
                return;
            }

            if (!fields.port || isNaN(fields.port)) {
                portErr();
                return;
            }

            if (!fields.databaseName.trim()) {
                dataNameBlank();
                return;
            }

            if (!fields.username.trim()) {
                userBlank();
                return;
            }

            if (!fields.password || fields.password.length < 8) {
                passErr();
                return;
            }

            const res = await saveDatabase(fields);
            console.log("User created:", res);
            success();
            cancel();

        }catch(error){
            console.log("error");
            notifyFail();
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
            databaseName: e.target.value
        });
    };

    const handleUserChange = (e) => {
        setFields({
            ...fields,
            username: e.target.value
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
      <div className='flex relative bg-white mt-10 mx-10 lg:mx-70 p-5 border-1 border-blue-500 rounded-t-2xl justify-between text-sm lg:text-xl shadow-lg shadow-blue-200'>
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
                    value={fields.databaseName}
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
                    value={fields.username}
                    onChange={handleUserChange}
                    type="text" 
                    placeholder="database username"
                    class="lg:w-100 w-full max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
            </div>

            <div className='flex flex-col gap-2'>
                <h1>Password</h1>
                <div className='flex gap-4 items-center'>

                <input 
                    value={fields.password}
                    onChange={handleHPassChange}
                    type={visible?"text":"password" }
                    placeholder="atleast 8 charaters"
                    class="lg:w-80 max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
                <i 
                    class={visible?"ri-eye-fill text-2xl text-blue-500 cursor-pointer":"ri-eye-off-fill text-2xl text-gray-500 cursor-pointer"}
                    onClick={()=>setVisible(!visible)}
                ></i>
                </div>
                
                
            </div>

        </div>
          
      </div>}
    </div>
  )
}

export default DatabaseSettings
