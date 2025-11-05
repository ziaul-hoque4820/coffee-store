import React, { useContext } from 'react';
import { CiEdit } from 'react-icons/ci';
import { LuView } from 'react-icons/lu';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthContext';

function CoffeeCard({ coffee, coffees, setCoffees }) {
    const { _id, name, supplier, price, photo } = coffee;
    const { user } = useContext(AuthContext);

    const handleDelete = (_id) => {
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
                fetch(`https://coffee-store-1.onrender.com/coffees/${_id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success",
                            });
                            const updated = coffees.filter((c) => c._id !== _id);
                            setCoffees(updated);
                        }
                    });
            }
        });
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-white/70 border border-gray-200 rounded-lg p-5 md:p-6">
            {/* Image */}
            <figure className="w-full md:w-1/3 flex justify-center items-center">
                <img
                    src={photo}
                    alt={name}
                    className="w-28 h-28 md:w-32 md:h-32 object-contain"
                />
            </figure>

            {/* Info */}
            <div className="flex flex-col justify-center md:w-2/3 md:flex-row md:justify-between items-start md:items-center gap-4 w-full">
                <div>
                    <p className="text-[#331A15] font-semibold">
                        <span className="font-bold text-[#1B1A1A]">Name:</span> {name}
                    </p>
                    <p className="text-[#331A15]">
                        <span className="font-bold text-[#1B1A1A]">Supplier:</span> {supplier}
                    </p>
                    <p className="text-[#331A15]">
                        <span className="font-bold text-[#1B1A1A]">Price:</span> {price} Taka
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex md:flex-col gap-2 md:gap-3">
                    {user && (
                        <>
                            <Link
                                to={`/coffee/${_id}`}
                                className="bg-[#E3B577] text-white p-2 rounded hover:bg-[#cba25d] transition-colors"
                            >
                                <LuView className="text-lg" />
                            </Link>

                            <Link
                                to={`/updateCoffee/${_id}`}
                                className="bg-[#1B1A1A] text-white p-2 rounded hover:bg-[#3b3b3b] transition-colors"
                            >
                                <CiEdit className="text-lg" />
                            </Link>

                            <button
                                onClick={() => handleDelete(_id)}
                                className="bg-[#E74C3C] text-white p-2 rounded hover:bg-[#c0392b] transition-colors cursor-pointer"
                            >
                                <MdDeleteForever className="text-lg" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CoffeeCard;
