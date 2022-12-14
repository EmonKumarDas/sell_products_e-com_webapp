import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/UseToken';
import { userContext } from '../context/AuthProvider';
import CircleLoading from '../Loader/CircleLoading';



const Register = () => {
    const { googleSignIn, CreateUser, updateUser } = useContext(userContext);
    const location = useLocation();
    const [loading,setLoading] = useState(false);
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const [error,setError] = useState("");
    //jwt
    const [currentEmail, setEmail] = useState('');
    const [token] = useToken(currentEmail);
    if (token) {
        navigate(from, { replace: true });
    }

    const defaultRole = 'Buyer';

    // google sign in
    const handleGoolgeSignIn = () => {
        googleSignIn().then((result) => {
            const email = result.user.email;
            const name = result.user.displayName;
            senduserDatabase(name, email, defaultRole)
        })
    }

    // Register with form
    const handleLoginForm = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const model_role = e.target.model_role.value;
        setLoading(true);
        CreateUser(email, password)
            .then((result) => {
                const email = result.user.email;
                handleUserProfile(name);
                senduserDatabase(name, email, model_role);

            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                setLoading(false);
            })

        const handleUserProfile = (name) => {
            const profile = {
                displayName: name
            }
            updateUser(profile).then(() => { 
                setLoading(false);
            })
        }
    }

    // send user info to database
    const senduserDatabase = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://second-hand-ecom-serverside.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },

            body: JSON.stringify(user),
        }

        ).then(res => res.json()).then(result => {
            //    jwt
            setEmail(email)
            console.log(result)
        })
    }


    return (
        <div className='flex justify-center my-10'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center">Register to your account</h2>
                <p className="text-sm text-center dark:text-gray-400">have an account?
                    <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline">LogIn here</Link>
                </p>
                <div className="my-6 space-y-4">
                    <button onClick={handleGoolgeSignIn} type="button" aria-label="Login with Google" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-400" />
                    <p className="px-3 dark:text-gray-400">OR</p>
                    <hr className="w-full dark:text-gray-400" />
                </div>
                <form onSubmit={handleLoginForm} className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm">Name</label>
                            <input type="Name" required name="name" id="Name" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400" />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm">Email address</label>
                            <input type="email" required name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="text-sm">Password</label>
                                <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</Link>
                            </div>
                            <input type="password" required name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400" />

                        </div>
                        <p>I want to be a!</p>
                        <select name='model_role' className="select select-bordered w-full max-w-xs">
                            <option selected>Buyer</option>
                            <option>Seller</option>
                        </select>

                    </div>
                    <p className='text-red-600 font-bold'>{error}</p>
                    <button id="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-blue-400 dark:text-gray-900">{loading ? <CircleLoading></CircleLoading> : "Register"}</button>
                </form>
            </div>

        </div>
    );
};

export default Register;