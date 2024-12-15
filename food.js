import mongoose from 'mongoose';


const foodSchema = mongoose.Schema(
      {
        name: {
            type: String,
            require: true,
         },
         price: {
            type: String,
            require: true,
         },
         image: {
            type: String,
            require: true,
         }
      }
       
   );

   const Product = mongoose.model("Food", foodSchema);

 