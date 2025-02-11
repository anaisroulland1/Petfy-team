import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsChat } from "react-icons/bs";
import { GoStarFill } from "react-icons/go";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import NavElement from "../Components/NavElement";

const Navbar = () => {
    // const navigate = useNavigate();
    // const handleLogout = () => {
    //     localStorage.removeItem("token"); // Suppression du jeton JWT
    //     navigate("/login"); // Redirection vers la page de connexion
    // };
    // <button onClick={handleLogout}>Déconnexion</button>
    return (
        <nav className="pl-6 bg-white min-w-full h-24 flex flex-row py-4 fixed bottom-0 justify-around">
            <NavElement link="/" text="Accueil" noSVG>
                <p>P</p>
            </NavElement>
            <NavElement link="/rechercher" text="Rechercher">
                <FaMagnifyingGlass style={{ fill: "url(#gradient)" }} />
            </NavElement>
            <NavElement link="/discussions" text="Discussions">
                <BsChat style={{ fill: "url(#gradient)" }} />
            </NavElement>
            <NavElement link="/premium" text="Premium">
                <GoStarFill style={{ fill: "url(#gradient)" }} />
            </NavElement>
            <NavElement link="/profil" text="Profil">
                <MdPerson style={{ fill: "url(#gradient)" }} />
            </NavElement>
        </nav>
    );
};
export default Navbar;
