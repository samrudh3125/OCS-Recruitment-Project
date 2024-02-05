import React, { useEffect, useState } from 'react'
import { Card, Typography } from "@material-tailwind/react";
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const TABLE_HEAD = ["UserId", "password_hash", "Role"];

const DashBoard = () => {
  const [searchParams]=useSearchParams();
  const userId=searchParams.get("userId");
  const [users,setUsers]=useState([]);

  useEffect(() => {
    const getUsers=async()=>{
      const response=await axios.get("https://ocs-server.onrender.com/users",{
        params:{
          userId,
        }
      });
      setUsers(response.data);
    }
    getUsers();
  }, [])

  return (
    <span className='flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8'>
     <Card className="h-full w-full overflow-scroll">
       <table className="w-full min-w-max table-auto text-left">
         <thead>
           <tr>
             {TABLE_HEAD.map((head) => (
               <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                 <Typography
                   variant="small"
                   color="blue-gray"
                   className="font-normal leading-none opacity-70"
                 >
                   {head}
                 </Typography>
               </th>
             ))}
           </tr>
         </thead>
         <tbody>
           {users.map(({ userid, password, role }, index) => (
             <tr key={index} className="even:bg-blue-gray-50/50">
               <td className="p-4">
                 <Typography variant="small" color="blue-gray" className="font-normal">
                   {userid}
                 </Typography>
               </td>
               <td className="p-4">
                 <Typography variant="small" color="blue-gray" className="font-normal">
                   {password}
                 </Typography>
               </td>
               <td className="p-4">
                 <Typography variant="small" color="blue-gray" className="font-normal">
                   {role}
                 </Typography>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
     </Card> 
    </span>
  )
}

export default DashBoard
