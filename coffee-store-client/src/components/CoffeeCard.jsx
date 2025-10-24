import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function CoffeeCard({ coffee }) {
    const { _id, name, quantity, photo, price } = coffee;

    const handleDelete = (id) => {
        console.log(id);
        

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
    }

    return (
        <div className="flex flex-col md:flex-row bg-base-100 shadow-md border rounded-xl overflow-hidden py-2 md:py-4">
            {/* Image */}
            <figure className="w-full md:w-1/3 flex justify-center items-center p-2">
                <img
                    src={photo}
                    alt={name}
                    className="w-full h-40 md:h-48 object-cover rounded-lg"
                />
            </figure>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-4 md:px-6 py-2 gap-4">
                {/* Coffee Info */}
                <div className="flex flex-col space-y-1">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800">{name}</h2>
                    <p className="text-gray-600 text-sm md:text-base">Price: <span className="font-medium">${price}</span></p>
                    <p className="text-gray-600 text-sm md:text-base">Quantity: {quantity}</p>
                </div>

                {/* Actions */}
                <div className="flex md:flex-col gap-2 md:gap-3">
                    <Link to="" className="btn btn-sm md:btn-md btn-outline">View</Link>
                    <Link to="" className="btn btn-sm md:btn-md btn-outline">Edit</Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm md:btn-md btn-error text-white">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default CoffeeCard;
