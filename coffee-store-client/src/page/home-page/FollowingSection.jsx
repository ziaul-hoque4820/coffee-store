import React from "react";
import { getCupsImageUrl } from "../../utils/utils";


function FollowingSection() {
  const followings = [
    {
      image: getCupsImageUrl("rectangle-1.png"),
      title: "Awesome Aroma",
      description: "You will definitely be a fan of the design & aroma of your coffee.",
    },
    {
      image: getCupsImageUrl("rectangle-2.png"),
      title: "High Quality",
      description: "We serve you the coffee maintaining the best quality.",
    },
    {
      image: getCupsImageUrl("rectangle-3.png"),
      title: "Pure Grades",
      description: "Made from selected green coffee beans that you'll love.",
    },
    {
      image: getCupsImageUrl("rectangle-4.png"),
      title: "Proper Roasting",
      description: "Brewed with perfection after proper roasting of the beans.",
    },
    {
      image: getCupsImageUrl("rectangle-5.png"),
      title: "Cozy Ambience",
      description: "Relax and enjoy your cup of coffee in our cozy space.",
    },
    {
      image: getCupsImageUrl("rectangle-6.png"),
      title: "Fresh Beans",
      description: "We always use freshly roasted beans for the perfect taste.",
    },
    {
      image: getCupsImageUrl("rectangle-7.png"),
      title: "Creative Blends",
      description: "Try our unique blends crafted by expert baristas.",
    },
    {
      image: getCupsImageUrl("rectangle-8.png"),
      title: "Perfect Brew",
      description: "Experience the harmony of aroma, texture, and flavor.",
    },
  ];

  return (
    <section className="w-full bg-[#f7f5f2] py-16 px-6 sm:px-10 md:px-16 lg:px-15">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <span className="text-[#331A15] text-lg font-body">Follow Us Now</span>
        <h2 className="text-3xl sm:text-4xl font-heading text-[#1B1A1A] mt-2">
          Follow on Instagram
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {followings.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-sm"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[350px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0  transition-all duration-500 group-hover:bg-black/30"></div>

            {/* Animated Top Text */}
            <h3 className="absolute left-1/2 top-[10%] -translate-x-1/2 -translate-y-[200%] text-white text-2xl font-heading font-semibold transition-transform duration-500 ease-in-out group-hover:-translate-y-0">
              {item.title}
            </h3>

            {/* Animated Bottom Text */}
            <p className="absolute left-1/2 bottom-[8%] -translate-x-1/2 translate-y-[200%] text-center w-4/5 text-white text-sm sm:text-base font-body leading-relaxed transition-transform duration-500 ease-in-out group-hover:translate-y-0">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FollowingSection;
