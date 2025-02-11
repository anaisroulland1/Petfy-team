import React, { useState } from "react";
import BasePageInscription from "../Components/BasePageInscription";
import MultiChoice from "../Components/MultiChoice";
import InputText from "../Components/InputText";

const CaracteristiquesAnimal = ({ onSubmitInfos }) => {
    const [nom, setNom] = useState("");
    const [sexe, setSexe] = useState("");
    const [age, setAge] = useState("");
    const [urgenceEuthanasie, setUrgenceEuthanasie] = useState(false);
    const [ententeAvec, setEntenteAvec] = useState([]);

    const submitAllInfos = () => {
        onSubmitInfos({ nom, sexe, age, urgenceEuthanasie, ententeAvec });
    };

    return (
        <BasePageInscription H2Content="Indique-nous ses caractéristiques" onSubmit={submitAllInfos}>
            <div className="flex flex-col gap-4 items-center">
                <div>
                    <p>Son nom</p>
                    <InputText onChange={(e) => setNom(e.target.value)} placeholder="Nom" />
                </div>
                <div className="flex flex-col gap-2 items-center w-4/5">
                    <p>C'est un(e)</p>
                    <MultiChoice options={["Mâle", "Femelle"]} onSelected={setSexe} />
                </div>
                <div className="flex flex-col gap-2 items-center w-4/5">
                    <p>Son âge</p>
                    <MultiChoice options={["Jeune", "Adulte", "Sénior"]} onSelected={setAge} />
                </div>
                <div className="flex flex-col gap-2 items-center w-4/5">
                    <p>En urgence euthanasie ?</p>
                    <MultiChoice options={["Oui", "Non"]} onSelected={setUrgenceEuthanasie} />
                </div>
                <div className="flex flex-col gap-2 items-center w-4/5">
                    <p>Ton animal s'entend bien avec</p>
                    <MultiChoice
                        options={["Chien", "Chat", "Enfants", "Autres animaux", "Je ne sais pas"]}
                        onSelected={setEntenteAvec}
                        multipleResponse
                    />
                </div>
            </div>
        </BasePageInscription>
    );
};

export default CaracteristiquesAnimal;
