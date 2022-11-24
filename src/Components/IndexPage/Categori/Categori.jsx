import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../image/iPhone-14-PNG-Free-Download.png';
import img2 from '../../../image/Xiaomi Mi 11 Png Transparent.png';
const Categori = ({ cate }) => {
    const { name,_id } = cate;
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    
                        <h2 className="card-title">{name}!</h2>

                    <div className="card-actions justify-end">
                       <Link to={`/phone/${_id}`}><button className="btn btn-primary">Visit Now</button></Link> 
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categori;