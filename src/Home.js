import React from "react";
import { useNavigate } from "react-router-dom";
import BasePageHome from "./Components/BasePageHome";

const Home = () => {
    const navigate = useNavigate();
    const login = () => {
        navigate("/login");
    };
    const register = () => {
        navigate("/register");
    };

    // return (
    //     <div className="h-screen flex flex-col justify-between">
    //         <Title />
    //         <H2>
    //             Prêt à <strong>rencontrer</strong> ton nouveau compagnon de vie ?
    //         </H2>
    //         <div className="flex flex-col items-center space-y-5 pb-5">
    //             <Button onClick={register}>Créer un compte</Button>
    //             <Button onClick={login}>Connexion</Button>
    //             <p className="px-6 text-primarytext text-sm text-center">
    //                 En cliquant sur "Créer un compte", vous acceptez nos conditions d'utilisation. aaaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaa
    //                 aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaaaaa
    //             </p>
    //         </div>
    //     </div>
    // );
    return <BasePageHome />;
};

export default Home;
