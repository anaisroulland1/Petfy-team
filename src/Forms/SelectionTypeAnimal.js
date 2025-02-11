import React, { useState } from "react";
import MultiSelect from "../Components/MultiSelect";
import BasePageInscription from "../Components/BasePageInscription";

const SelectionTypeAnimal = ({ onSubmitType }) => {
    let types = {
        Mammifères: [
            "Chien",
            "Chat",
            "Cheval",
            "Furet",
            "Lapin",
            "Cochon d'Inde",
            "Hamster",
            "Rat",
            "Souris",
            "Chinchilla",
            "Gerboise",
            "Octodon",
            "Ecureuil",
        ],
        Oiseaux: ["Perroquet", "Perruche", "Canari"],
        Reptiles: ["Serpent", "Lézard", "Tortue"],
        Poissons: ["Poisson rouge", "Poisson exotique"],
        "Animaux de ferme": ["Vache", "Poule", "Canard", "Oie", "Dindon", "Pigeon", "Mouton", "Chèvre", "Cochon", "Âne", "Cheval", "Poney"],
    };
    const [type, setType] = useState("");

    const changeType = (type) => {
        setType(type);
    };

    return (
        <BasePageInscription H2Content="Qui proposes-tu à l'adoption ?" onSubmit={() => onSubmitType(type)}>
            {type != "" ? (
                <p className="text-center">
                    Sélectionné : <strong>{type}</strong>
                </p>
            ) : null}
            <MultiSelect options={types} onSelected={changeType} selectedOption={type} />
        </BasePageInscription>
    );
};

export default SelectionTypeAnimal;
