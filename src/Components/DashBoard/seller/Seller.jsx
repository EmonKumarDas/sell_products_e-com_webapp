import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

import { userContext } from '../../context/AuthProvider';
const Seller = () => {
    const { user } = useContext(userContext);

    const url = `http://localhost:5000/getphones?email=${user?.email}`;

    const { data: phones = [] } = useQuery({
        queryKey: ['phones', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">My Products</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>

                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />

                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3">SL</th>
                                <th className="p-3">Image</th>
                                <th className="p-3">Brand</th>
                                <th className="p-3">Product Name</th>
                                <th className="p-3">Original Price</th>
                                <th className="p-3">Reseal Price</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                phones.map((phone, index) => <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        <p>{index + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <div className="avatar">
                                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img alt="/" src={phone.image} />
                                            </div>
                                        </div>

                                    </td>
                                    <td className="p-3">
                                        <p className="dark:text-gray-400">{phone.brand}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="dark:text-gray-400">{phone.productName}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="dark:text-gray-400">$ {phone.originalPrice}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="dark:text-gray-400">$ {phone.resalePrice}</p>
                                    </td>

                                    <td className="p-3 text-right">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-indigo-400 dark:text-gray-900">
                                            <span>Delete</span>
                                        </span>
                                    </td>
                                    <td className="p-3 text-right">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-indigo-400 dark:text-gray-900">
                                            <span>advertise</span>
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

export default Seller;