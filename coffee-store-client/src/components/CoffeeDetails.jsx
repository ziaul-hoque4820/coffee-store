import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CoffeeDetails() {
    const { id } = useParams();
    console.log(id);
    
    const [coffee, setCoffee] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/coffees/${id}`)
            .then(res => res.json())
            .then(data => setCoffee(data))
    }, [id]);

    if (!coffee) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-600">
                Loading coffee details...
            </div>
        );
    }

    const { name, supplier, taste, details, photo } = coffee;

    return (
        <div className="min-h-screen bg-[#f8f6f4] flex flex-col items-center justify-center p-6 md:p-12">
            {/* Back to home */}
            <div className="w-full max-w-6xl mb-6">
                <Link
                    to="/"
                    className="text-gray-700 font-medium hover:text-black transition flex items-center gap-1"
                >
                    <span className="text-lg">←</span> Back to home
                </Link>
            </div>

            {/* Main content */}
            <div className="w-full max-w-6xl bg-white shadow-lg rounded-2xl flex flex-col md:flex-row items-center gap-8 p-8">
                {/* Image Section */}
                <div className="flex justify-center md:w-1/2">
                    <img
                        src={photo}
                        alt={name}
                        className="w-48 md:w-64 lg:w-72 object-contain rounded-xl"
                    />
                </div>

                {/* Details Section */}
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4 text-[#5a3825]">Niceties</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li>
                            <span className="font-semibold text-black">Name:</span> {name}
                        </li>
                        <li>
                            <span className="font-semibold text-black">Chef:</span>
                        </li>
                        <li>
                            <span className="font-semibold text-black">Supplier:</span> {supplier}
                        </li>
                        <li>
                            <span className="font-semibold text-black">Taste:</span> {taste}
                        </li>
                        <li>
                            <span className="font-semibold text-black">Category:</span>
                        </li>
                        <li>
                            <span className="font-semibold text-black">Details:</span> {details}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CoffeeDetails;
