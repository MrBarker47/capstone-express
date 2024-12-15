//express 
const express = require("express");
const mongoose = require("mongoose");
import {config} from "dotenv"

config();

//PORT INFO
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());



//mongoose connection
mongoose.connect(process.env.MONGO_DB)
.then(() => {
    console.log("Connect to database");
})


//HTTP METHODS
app.get("/", (req, res) => {
    res.send('Hello, Jamaal Barker');
})

app.post('/api/products', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log("Server Listening on PORT:, port");
})