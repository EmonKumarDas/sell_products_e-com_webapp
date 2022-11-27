import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { userContext } from '../context/AuthProvider';
import Loader from '../Loader/Loader';
import WishtListCart from './WishtListCart';

const WishList = () => {
    const { user } = useContext(userContext);
const [total,setTotal] = useState("");
    const { isLoading, data: wistlists = [] } = useQuery({
        queryKey: ['wistlists'],
        queryFn: () =>
            fetch(`http://localhost:5000/wistlist?buyer_email=${user.email}`).then(res =>
                res.json()
            )
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='flex justify-center my-5'>
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="text-xl font-semibold">Your cart</h2>
                <ul className="flex flex-col divide-y divide-gray-700">
                    {
                        wistlists.map(wistlist =>
                            <WishtListCart
                                key={wistlist._id}
                                wistlist={wistlist}
                            ></WishtListCart>
                        )
                    }
                </ul>
        
                <div className="flex justify-end space-x-4">
                    <button type="button" className="px-6 py-2 border rounded-md dark:border-indigo-400">Back
                        <span className="sr-only sm:not-sr-only">to shop</span>
                    </button>
                    <button type="button" className="px-6 py-2 border rounded-md dark:bg-indigo-400 dark:text-gray-900 dark:border-indigo-400">
                        <span className="sr-only sm:not-sr-only">Pay Now</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WishList;