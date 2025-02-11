import React, { useState } from "react";
import Title from "../www/Title";
import NomOrganisation from "../Forms/NomOrganisation";
import DateOrganisation from "../Forms/DateOrganisation";
import SiretOrganisation from "../Forms/SiretOrganisation";
import VerificationInfosOrganisation from "../Forms/VerificationInfosOrganisation";
import { Navigate } from "react-router-dom";

const CreateOrganisation = () => {
    let name = "";
    let date = "";
    let siret = "";
    let adresse = "";
    let ville = "";
    let postalCode = "";

    const [isNameSubmited, setIsNameSubmited] = useState(false);
    const [isDateSubmited, setIsDateSubmited] = useState(false);
    const [isSiretSubmited, setIsSiretSubmited] = useState(false);

    const submitName = (name) => {
        name = name;
        setIsNameSubmited(true);
    };

    const submitDate = (date) => {
        date = date;
        setIsDateSubmited(true);
    };

    const submitSiret = (siret) => {
        siret = siret;
        setIsSiretSubmited(true);
    };

    const submitInformations = (siret, name, adresse, ville, postalCode) => {
        siret = siret;
        name = name;
        adresse = adresse;
        ville = ville;
        postalCode = postalCode;

        // ajouter la requête pour créer l'organisation

        <Navigate to="/register/animal" />;
    };

    return (
        <div>
            {isSiretSubmited ? (
                <VerificationInfosOrganisation onSubmit={submitInformations} siret={siret} name={name} />
            ) : isDateSubmited ? (
                <SiretOrganisation onSubmit={submitSiret} />
            ) : isNameSubmited ? (
                <DateOrganisation onSubmit={submitDate} />
            ) : (
                <NomOrganisation onSubmit={submitName} />
            )}
        </div>
    );
};

export default CreateOrganisation;
