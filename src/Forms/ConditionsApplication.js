import React from "react";
import Button from "../Components/Button";
import H2 from "../Components/H2";
import Title from "../www/Title";

const ConditionsApplication = ({ onSubmit }) => {
    return (
        <div className="bg-gradient-to-b from-bgstart to-bgend min-h-screen text-secondarytext border-solid border-secondarytext border-4">
            <div className="text-center h-screen py-8 flex flex-col justify-around items-center gap-4">
                <div>
                    <p className="text-3xl font-bold">Bienvenue sur</p>
                    <Title noPadding={true}>Petfy</Title>
                </div>
                <p className="text-lg">Quelques règles pour commencer :</p>
                <div className="text-secondary">
                    <h3 className="text-xl border-b-2 w-fit mx-auto font-semibold mb-4">Je recherche un animal :</h3>
                    <ul className="text-left w-4/5 mx-auto text-sm space-y-2">
                        <li>
                            • Fournis des informations <strong>exactes</strong> et <strong>vraies</strong> sur ta situation (photo, âge, bio).
                        </li>
                        <li>
                            • Garde ton compte <strong>sécurisé</strong> et des identifiants de connexion confidentiels.
                        </li>
                        <li>
                            • Sois toujours <strong>respectueux</strong> et <strong>courtois</strong> avec les autres utilisateurs.
                        </li>
                    </ul>
                </div>
                <div className="text-secondary">
                    <h3 className="text-xl border-b-2 w-fit mx-auto font-semibold mb-4">Je recherche un adoptant :</h3>
                    <ul className="text-left  w-4/5 mx-auto text-sm space-y-2">
                        <li>
                            • Les informations dans les annonces doivent être <strong>exactes</strong> et <strong>complètes</strong>. Ne falsifie
                            rien.
                        </li>
                        <li>
                            • Les photos de tes animaux doivent être <strong>récentes</strong> et <strong>représentatives</strong>. Pas de retouches
                            trompeuses.
                        </li>
                        <li>
                            • Sois <strong>transparent</strong> sur la santé et l'historique médical de ton animal.
                        </li>
                        <li>
                            • Mets à jour les informations sur tes animaux <strong>régulièrement</strong>.
                        </li>
                        <li>
                            • Ne publie pas d'annonces pour des <strong>animaux illégaux</strong> à posséder, vendre ou adopter.
                        </li>
                    </ul>
                </div>
                <p className="w-2/3 text-secondary text-sm font-semibold">
                    Tu peux signaler tout comportement abusif, annonce frauduleuse ou violation des règles via les fonctionnalités de signalement.
                </p>
                <Button type="secondary" onClick={onSubmit} className="w-2/3 font-bold">
                    J'accepte
                </Button>
            </div>
        </div>
    );
};

export default ConditionsApplication;
