import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../Api-Helpers/Api-helpers'

const AdminUsers = () => {
    const [user, setuser] = useState([])
    useEffect(()=>{
            getAllUsers().then((result)=>{
                setuser(result.users);
            })
    },[])
  return (
    <div class='p-4 dark:bg-gray-900 h-screen'>
        

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Number
                </th>
                <th scope="col" class="px-6 py-3">
                    name
                </th>
                <th scope="col" class="px-6 py-3">
                    phone
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
            </tr>
        </thead>
        <tbody>
          { user.map((user,index)=>{
            return(

          
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index+1}
                </th>
                <td class="px-6 py-4">
                    {user.name}
                </td>
                <td class="px-6 py-4">
                    {user.phone}
                </td>
                <td class="px-6 py-4">
                    {user.email}
                </td>
            </tr>
              )
            })
            }
        </tbody>
    </table>
</div>

    </div>
  )
}

export default AdminUsers