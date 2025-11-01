import React from "react";
import { getIconImageUrl } from "../../utils/utils";

function FeaturesSection() {
    const features = [
        {
            icon: getIconImageUrl("1.png"),
            title: "Awesome Aroma",
            description: "You will definitely be a fan of the design & aroma of your coffee",
        },
        {
            icon: getIconImageUrl("2.png"),
            title: "High Quality",
            description: "We served the coffee to you maintaining the best quality",
        },
        {
            icon: getIconImageUrl("3.png"),
            title: "Pure Grades",
            description: "The coffee is made of the green coffee beans which you will love",
        },
        {
            icon: getIconImageUrl("4.png"),
            title: "Proper Roasting",
            description: "Your coffee is brewed by first roasting the green coffee beans",
        },
    ];

    return (
        <section className="w-full bg-[#f2eee8] py-16">
            <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
                {features.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={item.icon} alt={item.title} className="w-14 h-14 mb-4" />
                        <h3 className="font-heading text-xl text-[#331A15] font-semibold mb-2">
                            {item.title}
                        </h3>
                        <p className="text-sm text-[#1B1A1A] leading-relaxed font-body max-w-[240px]">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>

    );
}

export default FeaturesSection;
