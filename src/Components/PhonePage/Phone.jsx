import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phones = useLoaderData();
    const { _id, name, brand } = phones;
    console.log("this", phones);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-items-center my-5 gap-5 mx-4'>
            {
                brand.map(brands =>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={brands.image} className="w-full" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{brands.brandname}!</h2>
                            <p>{brands.description}</p>
                           <div className='flex'>
                            <p className='font-bold'>Original Price:- {brands.original_price}</p>
                           <p className='font-bold'>resale Price:- {brands.resale_price}</p>
                           </div>
                           <p className='font-bold'>Years of use {brands.uses}</p>
                           <p className='font-bold'>Post Time {brands.posted_time}</p>
                           <p  className='text-warning font-bold'>Seller {brands.seller}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Phone;