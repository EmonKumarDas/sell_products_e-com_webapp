import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { userContext } from '../context/AuthProvider';
import Loader from '../Loader/Loader';
import WishtListCart from './WishtListCart';

const WishList = () => {
    const { user } = useContext(userContext);
    const [total, setTotal] = useState("");
    const { isLoading, data: wistlists = [] } = useQuery({
        queryKey: ['wistlists'],
        queryFn: () =>
            fetch(`http://localhost:5000/wistlist?buyer_email=${user.email}`).then(res =>
                res.json()
            )
    })

    console.log(wistlists.length)

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='flex justify-center my-5'>
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="text-xl font-semibold">Your cart</h2>
                <ul className="flex flex-col divide-y divide-gray-700">
                    {
                       wistlists.length===0?<p className='font-bold text-red-700'>OHH Nooo! Please Order Somthing</p>: 
                       wistlists.map(wistlist =>
                        <WishtListCart
                            key={wistlist._id}
                            wistlist={wistlist}
                        ></WishtListCart>
                    )
                    }
                </ul>

              
            </div>
        </div>
    );
};

export default WishList;