import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Allusers = () => {

    const {data: users=[],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
          const res = await fetch('http://localhost:5000/users');
          const data = await res.json();
          return data;
        
      }});

      const handleAdmin=(id)=>{
        fetch(`http://localhost:5000/user/seller/${id}`,{
        method:'PUT',
        }).then(res=>res.json()).then(result=>{
          if(result.modifiedCount>0){
            refetch();
          }
        })
      }

    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">All Users</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />

                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3">SL</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Role</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, index) =>
                                    <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                        <td className="p-3">
                                            <p>{index + 1}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{user.name}</p>
                                        </td>
                                        <td className="p-3">

                                            <p className="dark:text-gray-400">{user.email}</p>
                                        </td>
                                        <td className="p-3">

                                            <p className="dark:text-gray-400">{user.role}</p>
                                        </td>

                                        <td className="p-3 text-right">
                                            <span className="px-3 py-1 font-semibold rounded-md dark:bg-indigo-400 dark:text-gray-900">
                                            <button onClick={() => handleAdmin(user._id)}>{user?.role === "isSeller" ? "Approved" : "Approve Seller"}</button>
                                            </span>
                                        </td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Allusers;