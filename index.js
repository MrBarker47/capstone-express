import express from "express";
import mongoose from "mongoose";
import {config} from "dotenv";
import foodRoute from "./routes/food_Route.js"
import form from "./modules/form_Data.js"


config();

const app = express();
// app.use(express.json());


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
 
app.listen(PORT, () => {
    console.log('Server is on!');
}) 


// Form Methods 
app.post('/form', async (req, res) => {
   let user = new form(req.body);
   let result = await user.save();
   res.send(result)
   
})


app.use('/food', foodRoute);
app.use('/form', form);
