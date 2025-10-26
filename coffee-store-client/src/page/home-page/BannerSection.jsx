import React from "react";
import { getMoreImageUrl } from "../../utils/utils";


function BannerSection() {
    return (
        <section
            className="w-full lg:h-[800px] md:h-[700px] sm:h-[600px] h-[600px] bg-cover bg-center relative flex items-center justify-center"
            style={{
                backgroundImage: `url(${getMoreImageUrl("3.png")})`,
            }}
        >
            {/* Dark overlay for better readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content wrapper */}
            <div className="relative z-10 w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24">

                {/* Left empty half (for balance / layout spacing) */}
                <div className="hidden md:block w-1/2"></div>

                {/* Right content half */}
                <div className="w-full md:w-1/2 text-white text-center md:text-left">
                    <h1 className="font-heading text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Would you like a Cup of Delicious Coffee?
                    </h1>

                    <p className="mt-4 mb-8 text-sm sm:text-base md:text-lg leading-relaxed font-body m-auto max-w-md md:max-w-none">
                        It's coffee time — Sip &amp; Savor — Relaxation in every sip!
                        Get the nostalgia back!! Your companion of every moment!!!
                        Enjoy the beautiful moments and make them memorable.
                    </p>

                    <button className="px-6 py-2 bg-[#E3B577] text-black text-sm sm:text-base font-semibold rounded-[1px] border border-transparent hover:bg-transparent hover:border-[#E3B577] hover:text-white transition-all duration-300 cursor-pointer">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}

export default BannerSection;