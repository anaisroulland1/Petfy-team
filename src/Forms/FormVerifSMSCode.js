import React, { useState } from "react";
import H2 from "../Components/H2.js";
import Title from "../www/Title";
import Button from "../Components/Button.js";
import InputOfNDigits from "../Components/InputOfNDigits.js";

const FormVerifSMSCode = ({ onSubmit, phone }) => {
    const [code, setCode] = useState("");

    const handleCodeChange = (code) => {
        setCode(code);
    };

    const handleSubmit = () => {
        onSubmit(code);
    };

    const handleResendCode = () => {
        console.log("Resend code");
    };

    return (
        <div className="bg-gradient-to-b from-bgstart to-bgend min-h-screen text-secondarytext border-solid border-secondarytext border-4">
            <div className="flex flex-col h-screen items-center justify-around">
                <Title />
                <H2>Saisis ton code :</H2>
                <div>
                    <p>{phone}</p>
                    <a className="underline text-primarytext cursor-pointer" onClick={handleResendCode}>
                        Renvoyer le code
                    </a>
                    <p>Pour les test, le code est 111 111</p>
                </div>
                <InputOfNDigits n="6" onSubmit={handleCodeChange} />
                <Button type="secondary" onClick={handleSubmit}>
                    Suivant
                </Button>
            </div>
        </div>
    );
};

export default FormVerifSMSCode;
