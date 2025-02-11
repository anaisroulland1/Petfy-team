const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

// Route d'inscription
router.post("/register", async (req, res) => {
    const { phone, email, password, acceptNewsletter, acceptConditions } = req.body;
    try {
        const user = await User.create({ phone, email, password, acceptNewsletter, acceptConditions });
        const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });
        res.json({ token, user: { id: user._id } });
    } catch (err) {
        res.status(400).json({ message: "Erreur lors de l'inscription" });
    }
});

// Route de connexion
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
        return res.status(401).json({ message: "Identifiants incorrects" });
    }
    const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });
    res.json({ token });
});
module.exports = router;
