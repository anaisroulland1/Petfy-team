import React from "react";
import BasePageInscription from "../../../Components/BasePageInscription";
import InputText from "../../../Components/InputText";

const NomPrenomForm = ({ onSubmit }) => {
    let nom = "";
    let prenom = "";

    const submit = () => {
        onSubmit(nom, prenom);
    };

    return (
        <BasePageInscription H2Content="Comment tu t'appelle ?" onSubmit={submit}>
            <InputText placeholder="Prenom" onChange={(e) => (nom = e.target.value)} />
            <InputText placeholder="Nom" onChange={(e) => (prenom = e.target.value)} />
        </BasePageInscription>
    );
};

export default NomPrenomForm;
