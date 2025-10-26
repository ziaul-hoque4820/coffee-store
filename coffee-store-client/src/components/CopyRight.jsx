import React from "react";
import { getImageUrl } from "../utils/utils";

function CopyRight() {
    return (
        <section className="w-full bg-transparent">
            <div
                className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8"
                style={{
                    backgroundImage: `url(${getImageUrl("header-bg.png")})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <footer className="text-center text-white font-body text-sm sm:text-base py-3">
                    © {new Date().getFullYear()} Espresso Emporium | All Rights Reserved
                </footer>
            </div>
        </section>
    );
}

export default CopyRight;
