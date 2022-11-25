import React from 'react';

const Seller = () => {
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
                     
                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        <p>index</p>
                                    </td>
                                    <td className="p-3">
                                        <p>user.name</p>
                                    </td>
                                    <td className="p-3">

                                        <p className="dark:text-gray-400">user.email</p>
                                    </td>
                                    <td className="p-3">

                                        <p className="dark:text-gray-400">user.role</p>
                                    </td>

                                    <td className="p-3 text-right">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-indigo-400 dark:text-gray-900">
                                            <span>Pending</span>
                                        </span>
                                    </td>
                                </tr>
                        

                    </tbody>
                </table>
            </div>
        </div>

    </div>
    );
};

export default Seller;