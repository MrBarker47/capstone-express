import mongoose from "mongoose";


const formSchema = mongoose.Schema(
    {
       name:String,
       email:String
    }
);
export default mongoose.model('form', formSchema)