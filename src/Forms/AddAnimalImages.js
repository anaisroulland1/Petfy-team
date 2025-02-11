import React, { useState } from "react";
import DropZoneImage from "../Components/DropZoneImage";
import BasePageInscription from "../Components/BasePageInscription";

const AddAnimalImages = ({ onSubmitImages }) => {
    const [images, setImages] = useState([]);

    const onDrop = (acceptedFiles) => {
        setImages(acceptedFiles);
    };
    return (
        <BasePageInscription H2Content="Ajoute quelques photos de ton animal" onSubmit={() => onSubmitImages(images)}>
            <div className="flex justify-center gap-4 flex-wrap">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                    <DropZoneImage key={index} onDrop={onDrop} innerText={`Image ${index}`} />
                ))}
            </div>
            <p className="w-4/5 text-center">Essaie de mettre des photos de qualité de ton animal pour charmer son futur adoptant</p>
        </BasePageInscription>
    );
};

export default AddAnimalImages;
