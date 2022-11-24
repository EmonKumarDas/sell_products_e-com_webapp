import React from 'react';
import img1 from '../../../image/iPhone-14-PNG-Free-Download.png';
import img2 from '../../../image/Xiaomi Mi 11 Png Transparent.png';
const Categori = ({ cate }) => {
    const { name } = cate;
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    
                        <h2 className="card-title">{name}!</h2>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Visit Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categori;