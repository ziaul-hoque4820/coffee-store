import React from 'react'
import { getImageUrl, getMoreImageUrl } from '../utils/utils'

function Header() {
    return (
        <header>
            <div
                className="w-full h-[100px] sm:h-[120px] md:h-[120px] bg-cover bg-center relative flex items-center justify-center"
                style={{
                    backgroundImage: `url(${getImageUrl("header-bg.png")})`,
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
                    <img
                        className="w-[55px] h-[70px] sm:w-[65px] sm:h-[80px] md:w-[75px] md:h-[90px]"
                        src={getMoreImageUrl("logo1.png")}
                        alt="logo"
                    />
                    <span className="text-white font-heading text-2xl sm:text-3xl md:text-4xl tracking-wide">
                        Espresso Emporium
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header;
