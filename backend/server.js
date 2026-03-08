const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let responses = []; // temporary storage

// Test route
app.get("/", (req, res) => {
    res.send("Backend is working ❤️");
});

// Get all responses
app.get("/responses", (req, res) => {
    res.json(responses);
});

// Receive answer
app.post("/answer", (req, res) => {

    const { answer } = req.body;

    const newResponse = {
        answer: answer,
        time: new Date()
    };

    responses.push(newResponse);

    res.json({
        message: "Response saved successfully",
        data: newResponse
    });

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});