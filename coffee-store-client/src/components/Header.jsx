import React, { useState, useRef, useContext, useEffect } from "react";
import { getImageUrl, getMoreImageUrl } from "../utils/utils";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Header() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    const { user, signOutUser } = useContext(AuthContext);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = async () => {
        setOpen(false);
        await signOutUser();
    };

    return (
        <header
            className="w-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${getImageUrl("header-bg.png")})` }}
        >
            {/* Overlay pushed to lower z-index */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-[90px] sm:h-[110px] md:h-[120px] flex items-center justify-between">

                    <div className="w-1/3 hidden md:block" />

                    <Link
                        to="/"
                        className="
        flex items-center gap-3 z-[50]
        md:absolute md:left-1/2 md:top-1/2 
        md:-translate-x-1/2 md:-translate-y-1/2
    "
                    >
                        <img
                            className="w-[55px] h-[70px] sm:w-[65px] sm:h-[80px] md:w-[75px] md:h-[90px] object-contain"
                            src={getMoreImageUrl("logo1.png")}
                            alt="logo"
                        />
                        <span className="text-white font-heading text-lg sm:text-2xl md:text-3xl tracking-wide">
                            Espresso Emporium
                        </span>
                    </Link>

                    {/* Right side */}
                    <div className="w-1/3 flex justify-end items-center space-x-3">
                        {!user ? (
                            <div className="flex items-center gap-2">
                                <Link
                                    to="/signin"
                                    className="py-2 px-4 bg-white/10 hover:bg-white/20 text-white rounded-md border border-white/20 backdrop-blur transition"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/signup"
                                    className="py-2 px-4 bg-white text-black rounded-md font-medium shadow-sm hover:shadow-md transition"
                                >
                                    Register
                                </Link>
                            </div>
                        ) : (
                            <div className="relative" ref={menuRef}>
                                <button
                                    onClick={() => setOpen((s) => !s)}
                                    className="flex items-center gap-2 focus:outline-none z-[300] relative"
                                >
                                    <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/30">
                                        <img
                                            src={user.photoURL || getImageUrl("avater.jpg")}
                                            alt={user.displayName || "User"}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </button>

                                {open && (
                                    <div className="absolute right-0 mt-3 w-56 bg-white rounded-lg shadow-lg overflow-hidden text-sm z-[999]">
                                        <div className="p-4 border-b">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                                    <img
                                                        alt="User Profile"
                                                        src={user.photoURL || getImageUrl("avater.jpg")}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{user.displayName || "Anonymous"}</p>
                                                    <p className="text-xs text-gray-500">{user.email}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="py-2">
                                            <button
                                                onClick={() => setOpen(false)}
                                                className="block w-full text-left py-2 px-4 hover:bg-gray-100 transition"
                                            >
                                                Profile
                                            </button>
                                            <button
                                                onClick={() => setOpen(false)}
                                                className="block w-full text-left py-2 px-4 hover:bg-gray-100 transition"
                                            >
                                                Settings
                                            </button>
                                            <button
                                                onClick={handleLogout}
                                                className="block w-full text-left py-2 px-4 hover:bg-gray-100 transition text-red-600"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </header>
    );
}
