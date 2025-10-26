import React from "react";
import { getMoreImageUrl } from "../utils/utils.js";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

function FooterSection() {
    return (
        <section className="w-full bg-transparent">
            <div
                className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start overflow-hidden"
                style={{
                    backgroundImage: `url(${getMoreImageUrl("13.jpg")})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* LEFT */}
                <div className="py-8">
                    <img
                        src={getMoreImageUrl("logo1.png")}
                        alt="logo"
                        className="w-16 h-20 mb-4"
                    />
                    <h3 className="text-3xl font-heading text-[#331A15] mb-3">
                        Espresso Emporium
                    </h3>
                    <p className="text-[#1B1A1A] font-body mb-6 max-w-md leading-relaxed">
                        Always ready to be your friend. Come & Contact with us to share your
                        memorable moments, to share with your best companion.
                    </p>

                    <div className="flex items-center gap-4 text-[#331A15] text-xl mb-8">
                        <FaFacebook className="cursor-pointer" />
                        <FaTwitter className="cursor-pointer" />
                        <FaInstagram className="cursor-pointer" />
                        <FaLinkedin className="cursor-pointer" />
                    </div>

                    <h4 className="text-2xl font-heading text-[#331A15] mb-4">Get in Touch</h4>
                    <div className="space-y-3 text-[#1B1A1A] font-body">
                        <div className="flex items-center gap-3">
                            <FaPhone className="text-[#331A15]" />
                            <span>+88 01533 333 333</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdEmail className="text-[#331A15]" />
                            <span>info@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <IoLocationSharp className="text-[#331A15]" />
                            <span>72, Wall street, King Road, Dhaka</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="py-8 my-auto">
                    <h3 className="text-3xl font-heading text-[#331A15] mb-6">
                        Connect with Us
                    </h3>

                    <form className="flex flex-col gap-4 bg-transparent">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 bg-white/90 focus:border-[#E3B577] outline-none text-[#1B1A1A] font-body"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 bg-white/90 focus:border-[#E3B577] outline-none text-[#1B1A1A] font-body"
                        />
                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="w-full p-3 bg-white/90 focus:border-[#E3B577] outline-none text-[#1B1A1A] font-body resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-fit px-6 py-2 mt-2 border border-[#331A15] text-[#331A15] font-heading text-base rounded-full hover:bg-[#E3B577] hover:border-[#E3B577] hover:text-white transition-all duration-300 cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default FooterSection;
