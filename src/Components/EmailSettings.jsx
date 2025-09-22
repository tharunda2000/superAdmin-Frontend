import React, { useState } from 'react'
import { useAppContext } from '../Context/Context'
import { saveEmail } from '../services/EmailServices';
import toast, { Toaster } from 'react-hot-toast';

const EmailSettings = () => {

    const {emailCollapse,setEmailCollapse} = useAppContext();
    const [visible,setVisible] = useState(false);
    
    const [fields,setFields] = useState(
            {
                smtpHost:"",
                smtpPort:"",
                username:"",
                password:"",
                fromAddress:""
            }
        )
    
    const cancel =() => setFields(
            {
                smtpHost:"",
                smtpPort:"",
                username:"",
                password:"",
                fromAddress:""
            }
        );

    const success = () => toast.success('Settings saved successfully', {
                          duration: 2000
                        })

    const notifyFail = () => toast.error('Failed to save settings', {
                          duration: 2000
                         })

    const HostBlank = () => toast.error('SMTP Host is required', {
                          duration: 2000
                         })
    const portErr = () => toast.error('SMTP Port must be a number', {
                          duration: 2000
                         })
    const fromBlank = () => toast.error('From address is required', {
                          duration: 2000
                         })

    const userBlank = () => toast.error('Username is required', {
                          duration: 2000
                         })

    const passErr = () => toast.error('Password must be at least 8 characters long', {
                          duration: 2000
                         })

     const handleHostChange = (e) => {
        setFields({
            ...fields,
            smtpHost: e.target.value
        });
    };

    const handlePortChange = (e) => {
        setFields({
            ...fields,
            smtpPort: e.target.value
        });
    };

    const handleFromChange = (e) => {
        setFields({
            ...fields,
            fromAddress: e.target.value
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

    const saveData = async () =>{
            try{
    
                 if (!fields.smtpHost.trim()) {
                    HostBlank();
                    return;
                }
    
                if (!fields.smtpPort || isNaN(fields.smtpPort)) {
                    portErr();
                    return;
                }
    
                if (!fields.fromAddress.trim()) {
                    fromBlank();
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
    
                const res = await saveEmail(fields);
                console.log("User created:", res);
                success();
                cancel();
    
            }catch(error){
                console.log("error");
                notifyFail();
            }
        }
    

  return (
    <div className=''>
      <div className='flex relative bg-white mt-10 mx-10 lg:mx-70 p-5 border-1 border-blue-500 rounded-t-2xl justify-between text-sm lg:text-x shadow-lg shadow-blue-200'>
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
                    value={fields.smtpHost}
                    onChange={handleHostChange} 
                    placeholder="smtp host name"
                    class="lg:w-100 max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
            </div>

            <div className='flex flex-col gap-2'>
                <h1>SMTP Port</h1>
                <input 
                    type="text" 
                    value={fields.smtpPort}
                    onChange={handlePortChange} 
                    placeholder="smtp port number"
                    class="lg:w-100 max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
            </div>

            <div className='flex flex-col gap-2'>
                <h1>From</h1>
                <input 
                    type="text"
                    value={fields.fromAddress}
                    onChange={handleFromChange}  
                    placeholder="from address"
                    class="lg:w-100 max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
            </div>

            <div className='flex gap-5 my-5'>
                <input 
                    type="button" 
                    value="Save"
                    onClick={saveData} 
                    class="px-6 py-2 w-35 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all cursor-pointer"
                />
                <input 
                    type="button"
                    onClick={cancel} 
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
                    value={fields.username}
                    onChange={handleUserChange} 
                    placeholder="username"
                    class="lg:w-100w-full max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
            </div>

            <div className='flex flex-col gap-2'>
                <h1>Password</h1>
                <input 
                    type="password"
                    value={fields.password}
                    onChange={handleHPassChange}  
                    placeholder="password"
                    class="lg:w-100 max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
            </div>

        </div>
          
      </div>}
    </div>
  )
}

export default EmailSettings
