import React, { useState } from 'react'
import { useAppContext } from '../Context/Context'
import { saveEmail } from '../services/EmailServices';
import toast, { Toaster } from 'react-hot-toast';
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {emailError,emailSuccess} from '../Messages/EmailMsg'

const EmailSettings = () => {

    const {emailCollapse,setEmailCollapse} = useAppContext();
    const [visible,setVisible] = useState(false);

    const schema = z.object(
            {
                smtpHost: z.string().min(1,"Host is required"),
                smtpPort: z.string().min(1,"Port is required").regex(/^\d+$/,"port must be a number"),
                username: z.string().min(1, "Username is required"),
                password: z.string().min(8, "Password must be at least 8 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])/,"at least 1 lowercase ,uppercase ,special character"),
                fromAddress: z.string().min(1, "From address e is required").email("Invalid email address"),
            }
    )

    const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm(
        {
            resolver:zodResolver(schema)
        }
    );  
    
    const onSave = async (data) => {
        try {
            console.log("Submitting data:", data);
            const res = await saveEmail(data);
            console.log("Response:", res);
            emailSuccess();
            
           
        } catch (error) {
            console.error("Save failed:", error);
            emailError();
        }
    };


  return (
    <div className=''>
      <div className='flex relative bg-white mt-10 mx-10 lg:mx-70 p-5 border-1 border-blue-500 rounded-t-2xl justify-between text-sm lg:text-xl shadow-lg shadow-blue-200'>
          <div className='flex gap-3'>
            <i class="ri-mail-fill"></i>
            <h1 >Email Settings</h1>
          </div>
          <i 
            class="ri-arrow-down-wide-line text-2xl font-bold me-5 cursor-pointer bg-black px-1 text-white rounded-full hover:bg-blue-800"
            onClick={()=>setEmailCollapse(!emailCollapse)}
          ></i>
      </div>

    <form onSubmit={handleSubmit(onSave)}>
      {emailCollapse && <div className='flex relative bg-white mx-10 lg:mx-70 p-5 gap-20 justify-evenly border-1 border-blue-500'>

        <div className='flex flex-col gap-4'>

            <div className='flex flex-col gap-2'>
                <h1>SMTP Host</h1>
                <input
                    {...register("smtpHost")}  
                    type="text"
                    placeholder="smtp host name"
                    class="lg:w-100 max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
                {errors.smtpHost&& <div className='text-red-500'>{errors.smtpHost.message}</div>}
            </div>

            <div className='flex flex-col gap-2'>
                <h1>SMTP Port</h1>
                <input
                    {...register("smtpPort")}  
                    type="text" 
                    placeholder="smtp port number"
                    class="lg:w-100 max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
                {errors.smtpPort&& <div className='text-red-500'>{errors.smtpPort.message}</div>}
            </div>

            <div className='flex flex-col gap-2'>
                <h1>From</h1>
                <input 
                    {...register("fromAddress")} 
                    type="text"  
                    placeholder="from address"
                    class="lg:w-100 max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
                {errors.fromAddress&& <div className='text-red-500'>{errors.fromAddress.message}</div>}
            </div>

            <div className='flex gap-5 my-5'>
                <input 
                    type="submit" 
                    disabled={isSubmitting}
                    value={isSubmitting?"Saving...":"Save"} 
                    class={isSubmitting?"px-6 py-2 w-35 bg-blue-300 text-white font-medium rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ":"px-6 py-2 w-35 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all cursor-pointer"}
                   
                />
                <input 
                    type="reset"
                    value="✖ Cancel" 
                    class="px-6 py-2 w-35 bg-gray-200 text-gray-700 font-medium rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all cursor-pointer"
                />
            </div>

        </div>

        <div className='flex flex-col gap-4'>

            <div className='flex flex-col gap-2'>
                <h1>Username</h1>
                <input
                    {...register("username")}  
                    type="text"
                    placeholder="username"
                    class="lg:w-100w-full max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
                {errors.username&& <div className='text-red-500'>{errors.username.message}</div>}
            </div>

            <div className='flex flex-col gap-2'>
                <h1>Password</h1>
                    <div className='flex gap-4 items-center'>

                    <input
                        {...register("password")}
                        type={visible?"text":"password" }
                        placeholder="Enter a password"
                        class="lg:w-80 max-w-sm px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                    />
                    <i 
                        class={visible?"ri-eye-fill text-2xl text-blue-500 cursor-pointer":"ri-eye-off-fill text-2xl text-gray-500 cursor-pointer"}
                        onClick={()=>setVisible(!visible)}
                    ></i>
                    </div>
                {errors.password&& <div className='text-red-500'>{errors.password.message}</div>}
            </div>

        </div>
          
      </div>}
    </form>

    </div>
  )
}

export default EmailSettings
