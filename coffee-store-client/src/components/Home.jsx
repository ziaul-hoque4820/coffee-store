import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

function Home() {

    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);

    return (
        <div className="py-4 md:py-8 px-2 md:px-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Coffee Collection</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    coffees.map(coffee => (
                        <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                        />
                    ))
                }
            </div>

            <Link to={'/addCoffee'} className="btn btn-sm md:btn-md btn-outline mt-5">Add New Coffee</Link>
        </div>
    )
}

export default Home