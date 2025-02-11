import React, { useState } from "react";
import Title from "../www/Title";
import Button from "../Components/Button";
import InputOfNDigits from "../Components/InputOfNDigits";
import H2 from "../Components/H2";

const DateOrganisation = ({ onSubmit }) => {
    const [date, setDate] = useState("");

    return (
        <div className="bg-gradient-to-b from-bgstart to-bgend min-h-screen text-secondarytext border-solid border-secondarytext border-4">
            <div className="h-screen w-screen flex flex-col justify-around items-center text-center">
                <Title />
                <div className="flex flex-col gap-10 items-center">
                    <H2>Quelle est la date de création de votre organisation ?</H2>
                    <InputOfNDigits className="w-fit mx-auto" onSubmit={setDate} n="8" placeholder="JJMMAAAA" errorBase="La date" />
                </div>
                <Button type="secondary" onClick={() => onSubmit(date)}>
                    Suivant
                </Button>
            </div>
        </div>
    );
};

export default DateOrganisation;
