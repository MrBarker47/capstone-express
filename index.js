import express from "express"
import mongoose from "mongoose";
import {config} from "dotenv"


config();

const app = express();



const PORT = process.env.PORT || 5090;


//Mongoose Connection
mongoose.connect(process.env.Mongo_URL)
.then(() => {
    console.log("Connect to database");
})

//HTTP Methods
app.get('/', (req, res) => {
    res.send("Hello, Jamaal");
})
 

app.listen(PORT, () => {
    console.log('Server is on!');
}) 

app.use(express.json())