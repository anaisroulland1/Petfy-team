import React, { useState } from "react";
import NomPrenomForm from "./Forms/User/NomPrenomForm";

const CreateUser = () => {
    let courriel = "";
    let motDePasse = "";
    let confirmerMotDePasse = "";
    let prenom = "";
    let nom = "";
    let dateDeNaissance = "";
    let genre = "";
    let animauxAAdopter = [];
    let sexesDesires = [];
    let agesDesires = [];
    let urgenceEuthanasieDesiree = false;
    let animauxPossedes = [];
    let aDesEnfants = false;
    let habiteDans = "";
    let zoneDeRechercheMax = "";
    let photos = [];

    const [isNameSubmited, setIsNameSubmited] = useState(false);
    const [isBirthDateSubmited, setIsBirthDateSubmited] = useState(false);
    const [isGenderSubmited, setIsGenderSubmited] = useState(false);
    const [isPersonnalInformations, setIsPersonnalInformations] = useState(false);
    const [isAnimalsToAdoptSubmited, setIsAnimalsToAdoptSubmited] = useState(false);
    const [isDesiredInformations, setIsDesiredInformations] = useState(false);
    const [isMaxSearchAreaSubmited, setIsMaxSearchAreaSubmited] = useState(false);
    const [isPhotosSubmited, setIsPhotosSubmited] = useState(false);

    const submitNom = (prenom, nom) => {
        prenom = prenom;
        nom = nom;
        setIsNameSubmited(true);
    };

    const submitDateDeNaissance = (dateDeNaissance) => {
        dateDeNaissance = dateDeNaissance;
        setIsBirthDateSubmited(true);
    };

    const submitGenre = (genre) => {
        genre = genre;
        setIsGenderSubmited(true);
    };

    const submitInformationsPersonnelles = (informationsPersonnelles) => {
        prenom = informationsPersonnelles.prenom;
        nom = informationsPersonnelles.nom;
        dateDeNaissance = informationsPersonnelles.dateDeNaissance;
        genre = informationsPersonnelles.genre;
        setIsPersonnalInformations(true);
    };

    const submitAnimauxAAdopter = (animauxAAdopter) => {
        animauxAAdopter = animauxAAdopter;
        setIsAnimalsToAdoptSubmited(true);
    };

    const submitInformationsDesirees = (informationsDesirees) => {
        sexesDesires = informationsDesirees.sexesDesires;
        agesDesires = informationsDesirees.agesDesires;
        urgenceEuthanasieDesiree = informationsDesirees.urgenceEuthanasieDesiree;
        setIsDesiredInformations(true);
    };

    const submitZoneDeRechercheMax = (zoneDeRechercheMax) => {
        zoneDeRechercheMax = zoneDeRechercheMax;
        setIsMaxSearchAreaSubmited(true);
    };

    const submitPhotos = (photos) => {
        photos = photos;
        setIsPhotosSubmited(true);
    };

    // return (
    //     <>
    //         {isPhotosSubmited ? (
    //             <p>Utilisateur créé</p>
    //         ) : isMaxSearchAreaSubmited ? (
    //             <PhotosForm onSubmit={submitPhotos} />
    //         ) : isDesiredInformations ? (
    //             <ZoneDeRechercheMaximaleForm onSubmit={submitZoneDeRechercheMax} />
    //         ) : isAnimalsToAdoptSubmited ? (
    //             <InformationsDesireesForm onSubmit={submitInformationsDesirees} />
    //         ) : isPersonnalInformations ? (
    //             <AnimauxAAdopterForm onSubmit={submitAnimauxAAdopter} />
    //         ) : isGenderSubmited ? (
    //             <InformationsPersonnellesForm onSubmit={submitInformationsPersonnelles} />
    //         ) : isBirthDateSubmited ? (
    //             <GenreForm onSubmit={submitGenre} />
    //         ) : isNameSubmited ? (
    //             <DateDeNaissanceForm onSubmit={submitDateDeNaissance} />
    //         ) : (
    //             <NomPrenomForm onSubmit={submitNom} />
    //         )}
    //     </>
    // );
};

export default CreateUser;
