import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

function UpdateCoffee() {

    const { _id, name, quantity, price, taste, photo, details, supplier } = useLoaderData();
    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;

        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());


        // send updated coffee data to the DB
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log("updated coffee data",data);
                    Swal.fire({
                        title: "Coffee Added Successfully",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }

    return (
        <div className='p-24'>
            {/* Back to home */}
            <div className="w-full max-w-6xl mb-6">
                <Link
                    to="/"
                    className="text-gray-700 font-medium hover:text-black transition flex items-center gap-1"
                >
                    <span className="text-lg">←</span> Back to home
                </Link>
            </div>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-6xl">Update Coffee</h1>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" name='quantity' defaultValue={quantity} className="input w-full" placeholder="Quantity Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Supplier Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input type="text" name='taste' defaultValue={taste} className="input w-full" placeholder="Taste Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input type="text" name='price' defaultValue={price} className="input w-full" placeholder="Price per Cup" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="Details Name" />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                    <label className="label">Photo</label>
                    <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Photo URL" />
                </fieldset>

                <input type="submit" className='btn w-full' value="Update Coffee" />
            </form>
        </div>
    )
}

export default UpdateCoffee