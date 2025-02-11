const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socketio = require("socket.io");
const app = express();
const cors = require("cors");

const Animal = require("./models/Animal");
app.use(express.json());
app.use(cors("http://localhost:3000"));

app.post("/animals", async (req, res) => {
    try {
        const { name, age, race, imageUrl } = req.body;
        const animal = new Animal({ name, age, race, imageUrl });
        await animal.save();
        res.send(animal);
    } catch (error) {
        res.status(500).send({ error: "Failed to create animal" });
    }
});
app.get("/animals", async (req, res) => {
    try {
        const animals = await Animal.find();
        res.send(animals);
    } catch (error) {
        res.status(500).send({ error: "Failed to fetch animals" });
    }
});
app.post("/like/:id", async (req, res) => {
    try {
        const animal = await Animal.findById(req.params.id);
        animal.likes.push(req.body.userId);
        await animal.save();
        res.status(200).send("liked");
    } catch (error) {
        res.status(500).send({ error: "Failed to fetch animal" });
    }
});
app.post("/dislike/:id", async (req, res) => {
    try {
        const animal = await Animal.findById(req.params.id);
        animal.dislikes.push(req.body.userId);
        await animal.save();
        res.status(200).send("disliked");
    } catch (error) {
        res.status(500).send({ error: "Failed to fetch animal" });
    }
});

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

const server = http.createServer(app);
mongoose.connect("mongodb+srv://xounious:nVRictA7TS3k1WmL@tinder-animaux.fai83.mongodb.net/?retryWrites=true&w=majority&appName=tinder-animaux", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server running on port ${port}`));

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});
io.on("connection", (socket) => {
    console.log("Un nouveau client est connecté :", socket.id);
    socket.on("sendMessage", ({ from, to, message }) => {
        io.emit("receiveMessage", { from, to, message });
    });
    socket.on("disconnect", () => {
        console.log("Client déconnecté :", socket.id);
    });
});
