import React, { useState } from "react";
import Title from "./www/Title";
import Button from "./Components/Button";
import H2 from "./Components/H2";
import InputText from "./Components/InputText";
import axios from "axios";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/auth/login", { email, password });
            localStorage.setItem("token", res.data.token); // Sauvegarder le jeton JWT
            setMessage("Connexion réussie !");
        } catch (error) {
            setMessage("Identifiants incorrects.");
        }
    };
    return (
        <div className="bg-gradient-to-b from-bgstart to-bgend min-h-screen text-secondarytext border-solid border-secondarytext border-4">
            <div className="flex flex-col h-screen items-center justify-around">
                <Title noPadding="true" />
                <div className="w-full flex flex-initial gap-16 flex-col items-center justify-around">
                    <H2>Connexion</H2>
                    <div className="flex flex-col gap-10">
                        <InputText label="Email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <InputText
                            label="Mot de passe"
                            type="password"
                            placeholder="Mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <p className="text-center w-full">{message}</p>
                <Button type="secondary" onClick={handleSubmit}>
                    Se connecter
                </Button>
            </div>
        </div>
    );
};
export default Login;
