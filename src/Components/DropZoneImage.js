import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaUpload } from "react-icons/fa";

const DropZoneImage = ({ onDrop, innerText }) => {
    const [image, setImage] = useState(null);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setImage(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
            onDrop(acceptedFiles);
        },
    });
    console.log(getInputProps());

    return (
        <div
            className="border-2 rounded-lg bg-primary overflow-hidden border-secondary w-32 h-40 flex flex-col items-center justify-around relative"
            {...getRootProps()}
        >
            <input {...getInputProps()} />
            {image ? (
                <div className="h-full w-full group">
                    <img src={image[0].preview} alt="preview" className="w-full h-full object-cover group-hover:opacity-30" />
                    <FaUpload className="text-3xl absolute left-12 top-14 opacity-0 group-hover:opacity-100" />
                </div>
            ) : (
                <>
                    <FaUpload className="text-3xl" />
                    <p className="absolute bottom-2 left-2">{innerText}</p>
                </>
            )}
        </div>
    );
};

export default DropZoneImage;
