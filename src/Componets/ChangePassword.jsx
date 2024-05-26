import React, { useState } from 'react'
import Cookies from  'js-cookie'
import { changePassword } from '../Api-Helpers/Api-helpers';
import { useLocation } from 'react-router-dom';
const ChangePassword = () => {
      
const [oldpassword, setOldPassword] = useState(""); 
const [newPassword, setNewPassword] = useState("");


const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const id = searchParams.get('data');

const handelSubmit=(e)=>{
        e.preventDefault()
       changePassword(id,oldpassword,newPassword).then((result)=>{
        console.log(result);
       })
}
  return (
    <div><div>
    <section class="bg-gray-50 dark:bg-gray-900 h-screen  justify-center align-middle flex">
<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen w-full max-w-7xl lg:py-0">
    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        MOVIE TIME    
    </a>
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Change Your Password
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
            
            <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old Password</label>
                    <input value={oldpassword} onChange={(e)=>setOldPassword(e.target.value)} 
                     type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                    <input value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} 
                     type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
                
                <button onClick={handelSubmit}
                 type="submit" class="w-full border-solid bg-gray-400 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
               
            </form>
        </div>
    </div>
</div>
</section>
  </div></div>
  )
}

export default ChangePassword