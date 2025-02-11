import React, { useState } from "react";
import FormInscriptionTel from "../Forms/FormInscriptionTel";
import FormVerifSMSCode from "../Forms/FormVerifSMSCode";
import FormEmail from "../Forms/FormEmail";
import ConditionsApplication from "../Forms/ConditionsApplication";
import TypeAdoption from "../Forms/TypeAdoption";
import { Navigate } from "react-router-dom";

const Register = () => {
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [acceptsEmails, setAcceptsEmails] = useState(false);
    const [acceptConditions, setAcceptConditions] = useState(false);
    const [typeAdoption, setTypeAdoption] = useState("");

    const [isPhoneSubmitted, setIsPhoneSubmitted] = useState(false);
    const [isCodeSubmitted, setIsCodeSubmitted] = useState(false);
    const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
    const [isConditionsAccepted, setIsConditionsAccepted] = useState(false);
    const [isTypeAdoption, setIsTypeAdoption] = useState(false);
    const [isUserCreated, setIsUserCreated] = useState(false);

    const submitPhone = (phoneNumber) => {
        setPhone(phoneNumber);
        setIsPhoneSubmitted(true);
        console.log(phoneNumber);
    };

    const submitCode = (code) => {
        if (code === "111111") {
            setCode(code);
            setIsCodeSubmitted(true);
        }
    };

    const submitEmail = (email, password, acceptsEmails) => {
        setEmail(email);
        setAcceptsEmails(acceptsEmails);
        setIsEmailSubmitted(true);
    };

    const submitConditions = () => {
        //setAcceptConditions(true);
        //setIsConditionsAccepted(true);
        fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify({
            //     phone: phone,
            //     email: email,
            //     password: password,
            //     acceptNewsletter: acceptsEmails,
            //     acceptConditions: acceptConditions,
            // }),
            body: JSON.stringify({
                phone: "1111111111",
                email: "xounious@gmail.com",
                password: "password",
                acceptNewsletter: true,
                acceptConditions: true,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setIsUserCreated(true);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    submitConditions();

    const submitTypeAdoption = (TypeAdoption) => {
        setTypeAdoption(TypeAdoption);
        setIsTypeAdoption(true);
        if (TypeAdoption === "donneur") {
            return <Navigate to="/register/organisation" />;
        } else if (TypeAdoption === "adoptant") {
            // return <Navigate to="/register/animal" />;
        }
    };

    return (
        <div>
            {isTypeAdoption && typeAdoption == "donneur" ? (
                <Navigate to="/register/organisation" />
            ) : isConditionsAccepted && isUserCreated ? (
                <TypeAdoption onSubmit={submitTypeAdoption} />
            ) : isEmailSubmitted ? (
                <ConditionsApplication onSubmit={submitConditions} />
            ) : isCodeSubmitted ? (
                <FormEmail onSubmit={submitEmail} />
            ) : isPhoneSubmitted ? (
                <FormVerifSMSCode onSubmit={submitCode} phone={phone} />
            ) : (
                <FormInscriptionTel onSubmit={submitPhone} />
            )}
        </div>
    );
};

export default Register;
