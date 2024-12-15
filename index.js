//express 
import express from "express";
import mongoose from "mongoose";

//PORT INFO
const app = express();
const PORT = 3000;

// app.use(express.json());

//mongoose connection
// mongoose.connect(process.env.Mongo_DB)
// .then(() => {
//     console.log("Database is connected");
// })

//HTTP METHODS
app.get("/", (req, res) => {
    res.send('Hello, Jamaal Barker');
})

// app.post('/api/products', (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
// });



app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}:, port`);
    // console.log("Hello")
   
})