import mongoose from "mongoose";


const formSchema = mongoose.Schema(
    {
        name: {
            type: String, required: true
        },
        email: String, required: true
    }
);

export const Form = mongoose.model('Form', formSchema);