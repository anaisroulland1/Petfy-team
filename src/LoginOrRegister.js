import React from "react";
import { useNavigate } from "react-router-dom";
import BasePageHome from "./Components/BasePageHome";
import Button from "./Components/Button";
import Title from "./www/Title";

const LoginOrRegister = () => {
    const navigate = useNavigate();
    const login = () => {
        navigate("/login");
    };
    const register = () => {
        navigate("/register");
    };

    return (
        <div className="bg-gradient-to-b from-bgstart to-bgend min-h-screen text-secondarytext border-solid border-secondarytext border-4">
            <div className="flex flex-col h-screen items-center justify-around">
                <Title noPadding="true" />
                <div className="w-full flex flex-initial gap-10 flex-col items-center justify-around">
                    <Button onClick={login}>Connexion</Button>
                    <Button onClick={register}>Créer un compte</Button>
                </div>
            </div>
        </div>
    );
};

export default LoginOrRegister;
