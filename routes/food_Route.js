import express from "express"
import { Food } from "../modules/food_Data.js"

const router = express.Router();



router.post('/', async (req, res) => {
    try {
        if(
            !req.body.name || 
            !req.body.pricePoint ||
            !req.body.image
        ) {
            return res.status(400).send({
                message: 'Required fields are missing'
            })
        }

        const newFood = {
            name: req.body.name,
            pricePoint: req.body.pricePoint,
            image: req.body.image
        };

        const food = await Food.create(newFood);

        return res.status(200).send(food);

        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
});




// router.get('/', async (req, res) => {
//     try{
//         const food = await Food.find({});
//         res.status(200).json(food)
//     } catch (err) {
//         res.status(500).json({message: err.message});
//     };
    
// });

// router.post('/', async (req, res) => {
//     try {
//         const food = await Food.create();
//         res.status(200).json(food);
//     } catch (err) {
//         res.status(400).json({message: err.message});
//     };
// });



export default router;