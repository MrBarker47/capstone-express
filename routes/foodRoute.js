import express from "express"
import {Food} from "../FoodData/food_Data"

const router = express.Router();

router.get('/', async (req, res) => {
    const food = await Food
})
