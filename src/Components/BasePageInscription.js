import React from "react";
import Title from "../www/Title";
import Button from "../Components/Button";
import H2 from "../Components/H2";

const BasePageInscription = ({ H2Content, onSubmit, children }) => {
    return (
        <div className="bg-gradient-to-b from-bgstart to-bgend min-h-screen text-secondarytext border-solid border-secondarytext border-4">
            <div className="flex flex-col h-screen items-center justify-around">
                <Title noPadding="true" />
                <div className="w-full flex flex-initial gap-10 flex-col items-center justify-around">
                    <H2>{H2Content}</H2>
                    {children}
                </div>
                <Button type="secondary" onClick={onSubmit}>
                    Suivant
                </Button>
            </div>
        </div>
    );
};

export default BasePageInscription;
