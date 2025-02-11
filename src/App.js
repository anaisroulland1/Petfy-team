import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Profil from "./Profil";
// import Chat from "./Chat";
import Login from "./Login";
import Register from "./Register/Register";
import Navbar from "./www/Navbar";
import AnimalCard from "./AnimalCard";
import Home from "./Home";
import CreateOrganisation from "./Register/CreateOrganisation";
import CreateAnimal from "./Register/CreateAnimal";
import CreateUser from "./Register/CreateUser";
import LoginOrRegister from "./LoginOrRegister";

const App = () => {
    // const [animals, setAnimals] = useState([]);
    // useEffect(() => {
    //     axios
    //         .get("http://localhost:5000/animals")
    //         .then((response) => {
    //             setAnimals(response.data);
    //         })
    //         .catch((error) => {
    //             console.error("There was an error fetching the animals!", error);
    //         });
    // }, []);

    // const handleSwipe = (direction, id) => {
    //     const userId = JSON.parse(localStorage.getItem("user")).id;
    //     console.log(id);
    //     console.log(userId);
    //     console.log(direction);
    //     if (direction === "right") {
    //         axios
    //             .post(`http://localhost:5000/like/${id}`, { userId: userId })
    //             .then(() => {
    //                 console.log("like ajouté");
    //             })
    //             .catch((error) => {
    //                 console.log("erreur lors de l'ajout du like", error);
    //             });
    //     } else if (direction === "left") {
    //         axios
    //             .post(`http://localhost:5000/dislike/${id}`, { userId: userId })
    //             .then(() => {
    //                 console.log("dislike ajouté");
    //             })
    //             .catch((error) => {
    //                 console.log("erreur lors de l'ajout du dislike", error);
    //             });
    //     }
    // };

    return (
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<LoginOrRegister />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register/organisation" element={<CreateOrganisation />} />
                <Route path="/register/animal" element={<CreateAnimal />} />
                <Route path="/register/user" element={<CreateUser />} />
                <Route path="/profil" element={<PrivateRoute Component={Home} />} />
            </Routes>
            {/* <div className="animal-list">
                {animals
                    .filter((animal) => animal.race === "Chien")
                    .map((animal) => (
                        <AnimalCard key={animal._id} {...animal} onSwipe={(direction) => handleSwipe(direction, animal._id)} />
                    ))}
            </div> */}
        </Router>
    );
};
export default App;
