import React from "react";
import { getImageUrl } from "../utils/utils";

function CopyRight() {
    return (
        <section>
            <div
                className="w-full bg-cover bg-center py-4 sm:py-5"
                style={{
                    backgroundImage: `url(${getImageUrl("header-bg.png")})`,
                }}
            >
                <footer className="text-center text-white font-heading text-xl tracking-wide">
                    © {new Date().getFullYear()} Espresso Emporium | All Rights Reserved
                </footer>
            </div>
        </section>
    );
}

export default CopyRight;