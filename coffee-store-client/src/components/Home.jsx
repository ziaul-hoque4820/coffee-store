import React from 'react'
import { useLoaderData } from 'react-router-dom';

function Home() {

    const coffees = useLoaderData();
    console.log(coffees);
    

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

            </div>
        </div>
    )
}

export default Home