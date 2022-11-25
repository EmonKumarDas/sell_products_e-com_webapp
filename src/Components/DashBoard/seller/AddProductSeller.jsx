import React from 'react';

const AddProductSeller = () => {
    const hostimageKey = process.env.REACT_APP_imgbb_key;

    const handleProduct = (e) => {
        e.preventDefault();
        const file = e.target.image.files;
        const image = file[0];
        const formData = new FormData();
        formData.append('image',image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${hostimageKey}`;
        fetch(url,{
            method: 'POST',
            body:formData
        }).then(res=>res.json()).then(data=>console.log(data.data.url))
    }

    return (
        <div>
            <p className='font-bold text-3xl my-2'>Add Product</p>

            <section className="p-6">
                <form onSubmit={handleProduct} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label for="firstname" className="text-sm">Product Name</label>
                                <input id="firstname" name="name" placeholder="Product name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="lastname" className="text-sm">Enter Location</label>
                                <input id="lastname" name="location" placeholder="Enter Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <input type="file" name="image" className="file-input file-input-bordered w-full max-w-xs" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="email" className="text-sm">Resale Price</label>
                                <input id="email" name="r_price" placeholder="Resale Price" className="w-full text-white rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label for="address" className="text-sm">Original Price</label>
                                <input id="address" name="o_price" placeholder="Original Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="city" className="text-sm">Yerar of use</label>
                                <input id="city" name="uses" placeholder="Yerar of use" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="state" className="text-sm">Phone Number</label>
                                <input id="state" name="number" placeholder="Phone Number" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="zip" className="text-sm">Description</label>
                                <input id="zip" name="description" placeholder="description" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                        </div>
                    </fieldset>
                    <button className="btn btn-outline">Button</button>
                </form>
            </section>
        </div>
    );
};

export default AddProductSeller;