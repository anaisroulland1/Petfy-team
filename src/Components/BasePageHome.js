import React from "react";
import BlackTitle from "../www/BlackTitle";
import Navbar from "../www/Navbar";
import { Link } from "react-router-dom";
import { GoGear } from "react-icons/go";

const BasePageHome = ({ H2Content, onSubmit, children }) => {
    return (
        <>
            <Link to="/parametres" className="fixed top-4 right-4">
                <p className="text-6xl text-black">
                    <GoGear />
                </p>
            </Link>
            <div className="flex flex-col min-h-screen items-center justify-around">
                <BlackTitle noPadding="true" />
            </div>
            <Navbar />
        </>
    );
};

export default BasePageHome;
