import React, { useState } from "react";
import H2 from "../Components/H2.js";
import H3 from "../Components/H3.js";
import InputText from "../Components/InputText.js";
import Checkbox from "../Components/Checkbox.js";
import Title from "../www/Title";
import Button from "../Components/Button.js";
import InputOfNDigits from "../Components/InputOfNDigits.js";
import InputPassword from "../Components/InputPassword.js";

const FormEmail = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [acceptsEmails, setAcceptsEmails] = useState(false);

    const handleEmailChange = (event) => {
        setErrorMessage("");
        const value = event.target.value;
        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$}/.test(value)) {
            setEmail(value);
        } else {
            setErrorMessage("L'adresse email n'est pas valide");
        }
    };

    const handleSubmit = () => {
        onSubmit(email, acceptsEmails);
    };

    const handleAcceptsEmailsChange = (event) => {
        setAcceptsEmails(event.target.checked);
    };

    const handlePasswordChange = (event) => {
        if (password === "") {
            setPassword(event.target.value);
        } else {
            if (password !== event.target.value) {
                setErrorMessage("Les mots de passe ne correspondent pas");
            } else {
                setErrorMessage("");
            }
        }
    };

    return (
        <div className="bg-gradient-to-b from-bgstart to-bgend min-h-screen text-secondarytext border-solid border-secondarytext border-4">
            <div className="flex flex-col h-screen items-center justify-around">
                <Title />
                <div className="flex flex-initial h-64 flex-col items-center justify-around">
                    <H2>Insère ton email :</H2>
                    <H3>Valide ton adresse e-mail pour conserver l'accès à ton compte</H3>
                    <InputText placeholder="Email" onChange={handleEmailChange} />
                    <InputPassword placeholder="Mot de passe" onChange={handlePasswordChange} />
                    <InputPassword placeholder="Confirme ton mot de passe" onChange={handlePasswordChange} />
                    {errorMessage && <p className="error"> {errorMessage} </p>}
                    <Checkbox
                        label="J'accepte de recevoir les différentes communications de Petfy"
                        value={acceptsEmails}
                        onChange={handleAcceptsEmailsChange}
                    />
                </div>
                <Button type="secondary" onClick={handleSubmit}>
                    Suivant
                </Button>
            </div>
        </div>
    );
};

export default FormEmail;
