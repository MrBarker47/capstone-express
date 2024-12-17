import express from "express"
import {Food} from "../FoodData/food_Data"

const router = express.Router();

router.get('/', async (req, res) => {
    if(
        !req.body.menu ||
        !req.body.priceInput ||
        !req.body.image 
    ) {
        return res.status
    }
});

export default router;