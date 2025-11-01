import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCard from '../../components/CoffeeCard';
import BannerSection from './BannerSection';
import FollowingSection from './FollowingSection';
import FeaturesSection from './FeaturesSection';
import { BsCupHot } from 'react-icons/bs';
import { getMoreImageUrl } from '../../utils/utils';

function Home() {

    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);

    return (
        <section>
            <BannerSection />
            <FeaturesSection />
            <div
                className="w-full bg-center bg-no-repeat mt-5 py-10 md:py-16 
               bg-contain lg:bg-cover xl:bg-cover"
                style={{
                    backgroundImage: `url(${getMoreImageUrl("1.png")})`,
                }}
            >
                <div className="max-w-screen-xl mx-auto px-4 md:px-10">

                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-heading text-[#331A15] mt-1">
                            Our Popular Products
                        </h1>
                        <Link
                            to={"/addCoffee"}
                            className="inline-flex items-center gap-2 bg-[#E3B577] text-[#1B1A1A] px-4 py-2 rounded mt-4 hover:bg-[#d5a653] transition-all duration-300"
                        >
                            Add Coffee
                            <BsCupHot className="text-lg" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {coffees.map((coffee) => (
                            <CoffeeCard
                                key={coffee._id}
                                coffee={coffee}
                                coffees={coffees}
                                setCoffees={setCoffees}
                            />
                        ))}
                    </div>

                </div>
            </div>
            <FollowingSection />
        </section>
    )
}

export default Home