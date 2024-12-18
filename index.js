import express from "express";
import mongoose from "mongoose";
import {config} from "dotenv";
import foodRoute from "./routes/foodRoute.js";

config();

const app = express();

const PORT = process.env.PORT || 4090;

console.log(process.env)
//Mongoose Connection
mongoose.connect(process.env.Mongo_URL)
.then(() => { console.log('Database is connect');
})

//HTTP Methods
app.get('/', (req, res) => {
    res.send("Hello, Jamaal");
})
 
app.use(express.json());
app.use('/food', foodRoute);

app.listen(PORT, () => {
    console.log('Server is on!');
}) 


