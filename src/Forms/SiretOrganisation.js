import React, { useState } from "react";
import Title from "../www/Title";
import Button from "../Components/Button";
import InputText from "../Components/InputText";
import H2 from "../Components/H2";

const NomOrganisation = ({ onSubmit }) => {
    const [siret, setSiret] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const changeSiret = (e) => {
        setErrorMessage("");
        if (!/^\d*$/.test(e.target.value)) {
            setErrorMessage("Le SIRET ne doit contenir que des chiffres");
        } else if (e.target.value.length > 14) {
            setErrorMessage("Le SIRET ne doit pas dépasser 14 caractères");
        } else {
            setSiret(e.target.value);
        }
    };
    return (
        <div className="bg-gradient-to-b from-bgstart to-bgend min-h-screen text-secondarytext border-solid border-secondarytext border-4">
            <div className="flex flex-col h-screen items-center justify-around">
                <Title noPadding="true" />
                <div className="flex flex-initial gap-10 flex-col items-center justify-around">
                    <H2>Merci de remplir ces informations</H2>
                    <div>
                        <p className="font-semibold text-center pb-1">N° de SIRET</p>
                        <InputText onChange={changeSiret} placeholder="N° de SIRET" />
                        <p className="text-error text-semibold text-sm">{errorMessage}</p>
                    </div>
                </div>
                <Button type="secondary" onClick={() => onSubmit(siret)}>
                    Suivant
                </Button>
            </div>
        </div>
    );
};

export default NomOrganisation;
