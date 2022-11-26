import React from 'react';

const Modal = ({ getPhone, user }) => {
    console.log(getPhone)
    console.log(user)
    const {email,image,location,number,productName,resalePrice,seller,yearOfUse} = getPhone;
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <section className="p-6 dark:text-gray-50">
                        <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                            <fieldset className="grid gap-6 p-6 rounded-md shadow-sm">
                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                    <div className="col-span-full sm:col-span-3">
                                        <input type="text" placeholder="User Name" name="name" defaultValue={user.displayName} readOnly className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <input type="text" placeholder="Item name" name="item_name" defaultValue={productName} readOnly className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">

                                        <input type="text" name="email" defaultValue={user.email} readOnly placeholder="Email" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <input type="text" name="price" defaultValue={`$ ${resalePrice}`} readOnly placeholder="Price" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <input type="text" name="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                        <input type="text" name="meet_location" placeholder="Meeting location" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                </div>
                            </fieldset>
                            <div className="modal-action">
                                <label htmlFor="my-modal-6" className="btn">Book</label>
                            </div>
                        </form>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default Modal;