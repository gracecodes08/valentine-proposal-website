const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Backend server is running ❤️");
});

app.post("/answer", (req, res) => {
    const { answer } = req.body;

    if(answer === "yes"){
        res.json({message: "She said YES ❤️"});
    } else {
        res.json({message: "She said NO 💔"});
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});