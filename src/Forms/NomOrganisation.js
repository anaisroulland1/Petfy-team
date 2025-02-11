import React, { useState } from "react";
import Title from "../www/Title";
import Button from "../Components/Button";
import InputText from "../Components/InputText";
import H2 from "../Components/H2";

const NomOrganisation = ({ onSubmit }) => {
    const [name, setName] = useState("");

    const changeName = (e) => {
        setName(e.target.value);
    };
    return (
        <div className="bg-gradient-to-b from-bgstart to-bgend min-h-screen text-secondarytext border-solid border-secondarytext border-4">
            <div className="flex flex-col h-screen items-center justify-around">
                <Title noPadding="true" />
                <div className="flex flex-initial gap-10 flex-col items-center justify-around">
                    <H2>Quel est le nom de votre organisation ?</H2>
                    <InputText onChange={changeName} placeholder="Nom de l'organisation" />
                </div>
                <Button type="secondary" onClick={() => onSubmit(name)}>
                    Suivant
                </Button>
            </div>
        </div>
    );
};

export default NomOrganisation;
