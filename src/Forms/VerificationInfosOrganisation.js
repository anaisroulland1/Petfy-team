import React, { useState } from "react";
import Title from "../www/Title";
import Button from "../Components/Button";
import InputText from "../Components/InputText";
import H2 from "../Components/H2";

const VerificationInfosOrganisation = ({ onSubmit, siret, name }) => {
    const [localSiret, setSiret] = useState(siret);
    const [localName, setName] = useState(name);
    const [adresse, setAdresse] = useState("");
    const [ville, setVille] = useState("");
    const [codePostal, setCodePostal] = useState("");

    const changeSiret = (e) => {
        setSiret(e.target.value);
    };

    const changeName = (e) => {
        setName(e.target.value);
    };

    const changeAdresse = (e) => {
        setAdresse(e.target.value);
    };

    const changeVille = (e) => {
        setVille(e.target.value);
    };

    const changeCodePostal = (e) => {
        setCodePostal(e.target.value);
    };

    return (
        <div className="bg-gradient-to-b from-bgstart to-bgend min-h-screen text-secondarytext border-solid border-secondarytext border-4">
            <div className="flex flex-col min-h-screen items-center justify-around">
                <Title noPadding="true" />
                <div className="flex flex-initial gap-7 flex-col items-center justify-around">
                    <H2>Vérifiez que toutes les informations soient correctes</H2>
                    <InputTextWithLabel label="N° de SIRET" onChange={changeSiret} />
                    <InputTextWithLabel label="Nom de la société" onChange={changeName} />
                    <InputTextWithLabel label="Adresse" onChange={changeAdresse} />
                    <InputTextWithLabel label="Ville" onChange={changeVille} />
                    <InputTextWithLabel label="Code postal" onChange={changeCodePostal} />
                </div>
                <Button type="secondary" onClick={() => onSubmit(siret)}>
                    Créer l'organisation
                </Button>
            </div>
        </div>
    );
};

const InputTextWithLabel = ({ label, onChange }) => {
    return (
        <div>
            <p className="font-semibold text-center pb-1">{label}</p>
            <InputText onChange={onChange} placeholder={label} />
        </div>
    );
};

export default VerificationInfosOrganisation;
