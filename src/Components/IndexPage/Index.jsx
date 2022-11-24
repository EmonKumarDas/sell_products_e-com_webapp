import React, { useEffect, useState } from 'react';
import Categori from './Categori/Categori';
import image1 from '../../image/iPhone-14-PNG-File.png';
import DiscountBanner from './DIscountBanner/DiscountBanner';

const Index = () => {

    const [categoris, setCategrois] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/phoneCategori").then(res => res.json()).then(data => {
            setCategrois(data)
        })
    }, [])

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">

            <div className="container p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img alt='' src={image1} className="max-w-sm" />
                        <div>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>

                <p className='font-bold text-3xl text-center border-b-2 p-2'>Second Hand phone Categories</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center justify-items-center'>
                    {
                        categoris.map(cate => <Categori
                            cate={cate}
                        ></Categori>)

                    }
                </div>
                <DiscountBanner></DiscountBanner>

            </div>
        </section>

    );
};

export default Index;