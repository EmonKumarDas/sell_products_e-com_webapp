import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const DashBoard = () => {

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
            
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>DashBoard</Link></li>      
                        <li><Link to='/dashboard/admin'>Admin</Link></li>
                        {/* <li><Link to='/dashboard/doctors'>Add Doctor</Link></li> */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;