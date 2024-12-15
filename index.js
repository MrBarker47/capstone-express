const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());

app.get("/", (req, res) => {
    res.send('Hello, Jamaal Barker');
})

app.listen(PORT, () => {
    console.log("Server Listening on PORT:, port");
})