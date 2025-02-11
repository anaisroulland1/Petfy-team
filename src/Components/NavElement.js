import React from "react";
import { Link } from "react-router-dom";

const NavElement = ({ link, text, children, noSVG }) => {
    return (
        <Link to={link} className="flex flex-col">
            {!noSVG ? (
                <div className="relative left-2 w-2/3 h-12 mx-auto text-5xl from-bgstart to-bgend">
                    <svg className="w-full h-full">
                        <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="var(--tw-gradient-to)" offset="0%" />
                            <stop stopColor="var(--tw-gradient-from)" offset="100%" />
                        </linearGradient>
                        {children}
                    </svg>
                </div>
            ) : (
                <div className="text-5xl font-spicy relative text-center mx-auto text-transparent bg-clip-text bg-gradient-to-b from-bgstart to-bgend">
                    {children}
                </div>
            )}
            <p className="text-secondary text-xs text-center">{text}</p>
        </Link>
    );
};

export default NavElement;
