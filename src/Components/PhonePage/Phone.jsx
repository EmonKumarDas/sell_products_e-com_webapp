import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { userContext } from '../context/AuthProvider';

const Phone = () => {
    const { user } = useContext(userContext);
    const phones = useLoaderData();
    console.log(phones)



    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-items-center my-5 gap-5 mx-4'>
            {
                phones.map(phone =>
                    <div className="card w-full bg-base-100 border">
                        <figure><img src={phone.image} className="h-[200px]" alt="iphone" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{phone.productName}!</h2>
                            <p>{phone.description}</p>
                            <div className=''>
                                <p className='font-bold'>Original-Price: ${phone.originalPrice}</p>
                                <p className='font-bold'>Resale-Price: ${phone.resalePrice}</p>
                                {/* <p className='m-1 font-bold text-green-600'> {phone.buyerApprovel === "isSeller" ? <input type="checkbox" checked className="checkbox checkbox-info" /> : <span className='font-bold border p-1 text-red-700'>X</span>} Seller: {phone.seller}</p> */}
                                <p className='font-bold'>Post-Date: {phone.dateTime}</p>
                                <p className='font-bold'>Phone: {phone.number}</p>
                                <p className='font-bold'>Location: {phone.location}</p>
                                <p className='font-bold'>Yerar Of Use: {phone.yearOfUse}</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Book Now</button>
                            </div>
                        </div>
                    </div>)
            }

        </div>
    );
};

export default Phone;