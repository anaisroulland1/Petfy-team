import React from "react";
import Button from "../Components/Button";
import Title from "../www/Title";

const TypeAdoption = ({ onSubmit }) => {
    return (
        <div className="bg-gradient-to-b from-bgstart to-bgend min-h-screen text-secondarytext border-solid border-secondarytext border-4">
            <div className="h-screen w-screen">
                <Title />
                <div className="flex flex-col items-center gap-10 mt-64 w-5/6 mx-auto">
                    <Button type="secondary" className={"text-2xl font-semibold"} onClick={() => onSubmit("donneur")}>
                        Je cherche à faire adopter mon animal
                    </Button>
                    <Button type="secondary" className={"text-2xl font-semibold"} onClick={() => onSubmit("adoptant")}>
                        Je veux trouver un animal à l'adoption
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TypeAdoption;
