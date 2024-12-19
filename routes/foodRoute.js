import express from "express"
import { Food } from "../modules/food_Data.js"

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const food = await Food.find({});
        res.status(200).json(food)
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});



export default router;