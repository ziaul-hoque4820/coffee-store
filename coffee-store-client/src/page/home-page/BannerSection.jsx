import React from "react";
import { getMoreImageUrl } from "../../utils/utils";

function BannerSection() {
    return (
        <section
            className="w-full bg-cover bg-center bg-no-repeat relative flex items-center z-0"
            style={{
                backgroundImage: `url(${getMoreImageUrl("3.png")})`,
            }}
        >
            {/* Overlay should stay at lowest level */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-24 md:py-40 flex items-center justify-end">
                <div className="w-full md:w-1/2 text-white text-center md:text-left">
                    <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Would you like a Cup of Delicious Coffee?
                    </h1>

                    <p className="mt-4 mb-8 text-sm sm:text-base md:text-lg font-body leading-relaxed">
                        It's coffee time — Sip &amp; Savor — Relaxation in every sip!
                        Get the nostalgia back!! Your companion of every moment!!!
                        Enjoy the beautiful moments and make them memorable.
                    </p>

                    <button className="px-6 py-2 bg-[#E3B577] hover:bg-transparent border border-transparent hover:border-[#E3B577] hover:text-white transition-all duration-300 font-semibold">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}

export default BannerSection;
