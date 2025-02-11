import React, { useState } from "react";
import SelectionTypeAnimal from "../Forms/SelectionTypeAnimal";
import CaracteristiquesAnimal from "../Forms/CaracteristiquesAnimal";
import AddAnimalImages from "../Forms/AddAnimalImages";
import DescriptionAnimal from "../Forms/DescriptionAnimal";

const CreateAnimal = () => {
    const [type, setType] = useState("");
    const [nom, setNom] = useState("");
    const [sexe, setSexe] = useState("");
    const [age, setAge] = useState("");
    const [urgenceEuthanasie, setUrgenceEuthanasie] = useState(false);
    const [ententeAvec, setEntenteAvec] = useState([]);
    const [images, setImages] = useState([]);
    const [description, setDescription] = useState("");

    const handleType = (type) => {
        setType(type);
    };

    const handleCaracteristiques = ({ nom, sexe, age, urgenceEuthanasie, ententeAvec }) => {
        setNom(nom);
        setSexe(sexe);
        setAge(age);
        setUrgenceEuthanasie(urgenceEuthanasie);
        setEntenteAvec(ententeAvec);
    };

    const handleImages = (images) => {
        setImages(images);
    };

    const handleDescription = (description) => {
        setDescription(description);
    };

    // return <SelectionTypeAnimal onSubmitType={handleType} setType={setType} type={type} />;
    // return <CaracteristiquesAnimal onSubmitInfos={handleCaracteristiques} />;
    // return <AddAnimalImages onSubmitImages={handleImages} />;
    return <DescriptionAnimal nomAnimal={nom} onSubmitDescription={handleDescription} />;
};

export default CreateAnimal;
