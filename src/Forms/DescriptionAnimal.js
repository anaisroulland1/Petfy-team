import React, { useState } from "react";
import BasePageInscription from "../Components/BasePageInscription";
import InputTextArea from "../Components/InputTextArea";

const DescriptionAnimal = ({ onSubmitDescription, nomAnimal }) => {
    const [description, setDescription] = useState([]);
    let H2Content = "A propos de " + nomAnimal;
    let placeholder = "Décris-nous" + nomAnimal + ", son caractère, ses habitudes, ses besoins, etc.";
    return (
        <BasePageInscription H2Content={H2Content} onSubmit={() => onSubmitDescription(description)}>
            <InputTextArea onChange={(e) => setDescription(e.target.value)} placeholder={placeholder} />
        </BasePageInscription>
    );
};

export default DescriptionAnimal;
