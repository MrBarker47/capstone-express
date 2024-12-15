//express 
const express = require("express");
const mongoose = require("mongoose");

//PORT INFO
const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());



//mongoose connection
mongoose.connect("mongodb+srv://MrBarker47:WfhpISelxhFNvZyD@mongopractice.mkbxl.mongodb.net/?retryWrites=true&w=majority&appName=MongoPractice")
.then(() => {
    console.log("Connect to database");
})


//HTTP METHODS
app.get("/", (req, res) => {
    res.send('Hello, Jamaal Barker');
})

app.listen(PORT, () => {
    console.log("Server Listening on PORT:, port");
})