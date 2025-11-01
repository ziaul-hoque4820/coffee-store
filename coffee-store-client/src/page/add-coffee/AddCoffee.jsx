import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function AddCoffee() {

    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;

        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());

        console.log(newCoffee);

        // send coffee data to the DB
        fetch('https://coffee-store-1.onrender.com/coffees', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(data);
                    Swal.fire({
                        title: "Coffee Added Successfully",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                }
            })
    }

    return (
        <div className='py-20 px-4 md:px-10 lg:px-10 xl:px-10 max-w-6xl mx-auto'>
            {/* Back to home */}
            <div className="w-full max-w-6xl mb-6">
                <Link
                    to="/"
                    className="text-gray-700 font-bold font-heading text-xl hover:text-black transition flex items-center gap-1"
                >
                    <span className="text-lg">←</span> Back to home
                </Link>
            </div>

            <div className='p-2 md:p-12 lg:p-12 xl:p-12 text-center space-y-4'>
                <h1 className="text-6xl">Add Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label font-heading text-xl">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label font-heading text-xl">Quantity</label>
                        <input type="text" name='quantity' className="input w-full" placeholder="Quantity Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label font-heading text-xl">Supplier</label>
                        <input type="text" name='supplier' className="input w-full" placeholder="Supplier Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label font-heading text-xl">Taste</label>
                        <input type="text" name='taste' className="input w-full" placeholder="Taste Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label font-heading text-xl">Price</label>
                        <input type="text" name='price' className="input w-full" placeholder="Price per Cup" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label font-heading text-xl">Details</label>
                        <input type="text" name='details' className="input w-full" placeholder="Details Name" />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                    <label className="label font-heading text-xl">Photo</label>
                    <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
                </fieldset>

                <input type="submit" className='btn w-full bg-[#D2B48C] text-white font-heading text-xl rounded-[5px] border border-transparent hover:bg-[#b49d7e] hover:border-[#cab495] transition-all duration-300 cursor-pointer' value="Add Coffee" />
            </form>
        </div>
    )
}

export default AddCoffee