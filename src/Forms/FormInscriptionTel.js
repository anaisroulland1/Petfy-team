import React, { useState } from "react";
import H2 from "../Components/H2.js";
import H3 from "../Components/H3.js";
import Title from "../www/Title";
import Button from "../Components/Button.js";
import InputOfNDigits from "../Components/InputOfNDigits.js";

const FormInscriptionPhone = ({ onSubmit }) => {
    let erreur = "";
    const [phone, setPhone] = useState("");

    const handlePhoneChange = (phoneNumber) => {
        if (phoneNumber.length === 10) {
            setPhone(phoneNumber);
        } else {
            setPhone("");
            erreur = "Le numéro de téléphone doit contenir 10 chiffres";
        }
    };

    const handleSubmit = () => {
        onSubmit(phone);
    };

    return (
        <div className="bg-gradient-to-b from-bgstart to-bgend min-h-screen text-secondarytext border-solid border-secondarytext border-4">
            <div className="flex flex-col h-screen items-center justify-around">
                <Title />
                <H2 className="py-20">Insère ton numéro de téléphone :</H2>
                <InputOfNDigits n="10" onSubmit={handlePhoneChange} errorBase="Le numéro de téléphone" />
                {erreur && <p className="text-error">{erreur}</p>}
                <H3>
                    Tu vas reçevoir un code par <strong>SMS</strong> pour vérifier ton identité
                </H3>
                <Button type="secondary" onClick={handleSubmit}>
                    Recevoir le code
                </Button>
            </div>
        </div>
    );
};

export default FormInscriptionPhone;
