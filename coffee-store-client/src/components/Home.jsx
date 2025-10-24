import React from 'react'
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

function Home() {

    const coffees = useLoaderData();

    return (
        <div className="py-4 md:py-8 px-2 md:px-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Coffee Collection</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    coffees.map(coffee => (
                        <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home