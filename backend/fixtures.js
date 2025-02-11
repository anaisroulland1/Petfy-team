// fixtures pour créer des animaux

const mongoose = require("mongoose");
const Animal = require("./models/Animal");

let animals = [
    { name: "Rex", age: 5, race: "Chien", imageUrl: "https://placedog.net/500" },
    { name: "Bella", age: 3, race: "Chat", imageUrl: "https://placecats.com/500" },
    { name: "Max", age: 4, race: "Chien", imageUrl: "https://placedog.net/501" },
    { name: "Luna", age: 2, race: "Chat", imageUrl: "https://placecats.com/501" },
    { name: "Charlie", age: 6, race: "Chien", imageUrl: "https://placedog.net/502" },
    { name: "Lucy", age: 1, race: "Chat", imageUrl: "https://placecats.com/502" },
    { name: "Cooper", age: 7, race: "Chien", imageUrl: "https://placedog.net/503" },
    { name: "Milo", age: 5, race: "Chat", imageUrl: "https://placecats.com/503" },
    { name: "Rocky", age: 3, race: "Chien", imageUrl: "https://placedog.net/504" },
    { name: "Lily", age: 4, race: "Chat", imageUrl: "https://placecats.com/504" },
    { name: "Daisy", age: 2, race: "Chien", imageUrl: "https://placedog.net/505" },
    { name: "Molly", age: 6, race: "Chat", imageUrl: "https://placecats.com/505" },
    { name: "Bailey", age: 1, race: "Chien", imageUrl: "https://placedog.net/506" },
    { name: "Sophie", age: 7, race: "Chat", imageUrl: "https://placecats.com/506" },
    { name: "Sadie", age: 5, race: "Chien", imageUrl: "https://placedog.net/507" },
    { name: "Chloe", age: 3, race: "Chat", imageUrl: "https://placecats.com/507" },
    { name: "Buddy", age: 4, race: "Chien", imageUrl: "https://placedog.net/508" },
    { name: "Zoey", age: 2, race: "Chat", imageUrl: "https://placecats.com/508" },
    { name: "Jack", age: 6, race: "Chien", imageUrl: "https://placedog.net/509" },
    { name: "Lola", age: 1, race: "Chat", imageUrl: "https://placecats.com/509" },
    { name: "Toby", age: 7, race: "Chien", imageUrl: "https://placedog.net/510" },
    { name: "Zoe", age: 5, race: "Chat", imageUrl: "https://placecats.com/510" },
    { name: "Duke", age: 3, race: "Chien", imageUrl: "https://placedog.net/511" },
    { name: "Roxy", age: 4, race: "Chat", imageUrl: "https://placecats.com/511" },
    { name: "Bear", age: 2, race: "Chien", imageUrl: "https://placedog.net/512" },
    { name: "Maggie", age: 6, race: "Chat", imageUrl: "https://placecats.com/512" },
    { name: "Tucker", age: 1, race: "Chien", imageUrl: "https://placedog.net/513" },
    { name: "Nala", age: 7, race: "Chat", imageUrl: "https://placecats.com/513" },
    { name: "Oliver", age: 5, race: "Chien", imageUrl: "https://placedog.net/514" },
    { name: "Mia", age: 3, race: "Chat", imageUrl: "https://placecats.com/514" },
    { name: "Bentley", age: 4, race: "Chien", imageUrl: "https://placedog.net/515" },
    { name: "Ruby", age: 2, race: "Chat", imageUrl: "https://placecats.com/515" },
    { name: "Zeus", age: 6, race: "Chien", imageUrl: "https://placedog.net/516" },
    { name: "Coco", age: 1, race: "Chat", imageUrl: "https://placecats.com/516" },
    { name: "Winston", age: 7, race: "Chien", imageUrl: "https://placedog.net/517" },
    { name: "Lilly", age: 5, race: "Chat", imageUrl: "https://placecats.com/517" },
    { name: "Sam", age: 3, race: "Chien", imageUrl: "https://placedog.net/518" },
    { name: "Penny", age: 4, race: "Chat", imageUrl: "https://placecats.com/518" },
    { name: "Gus", age: 2, race: "Chien", imageUrl: "https://placedog.net/519" },
    { name: "Ellie", age: 6, race: "Chat", imageUrl: "https://placecats.com/519" },
    { name: "Murphy", age: 1, race: "Chien", imageUrl: "https://placedog.net/520" },
    { name: "Sasha", age: 7, race: "Chat", imageUrl: "https://placecats.com/520" },
    { name: "Harley", age: 5, race: "Chien", imageUrl: "https://placedog.net/521" },
    { name: "Willow", age: 3, race: "Chat", imageUrl: "https://placecats.com/521" },
    { name: "Buster", age: 4, race: "Chien", imageUrl: "https://placedog.net/522" },
    { name: "Kiki", age: 2, race: "Chat", imageUrl: "https://placecats.com/522" },
    { name: "Bruno", age: 6, race: "Chien", imageUrl: "https://placedog.net/523" },
    { name: "Izzy", age: 1, race: "Chat", imageUrl: "https://placecats.com/523" },
    { name: "Oscar", age: 7, race: "Chien", imageUrl: "https://placedog.net/524" },
    { name: "Ginger", age: 5, race: "Chat", imageUrl: "https://placecats.com/524" },
];
animals.forEach((animal) => {
    fetch("http://localhost:5000/animals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(animal),
    })
        .then((response) => console.log("animal ajouté"))
        .catch((error) => console.error("erreur"));
});
