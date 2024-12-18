import express from "express"
import { Food } from "../modules/food_Data"

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        if(
            !req.body.menu ||
            !req.body.pricePoint ||
            !req.body.image
        ) {
            return response.status(400).send({
                message: 'Required fields are missing'
            })
        }
        const newFood = {
            menu: request.body.name,
            pricePoint: request.body.pricePoint,
            image: request.body.image
        };
        const food = await Food.create(newFood);

        return response.status(200).send(food);
    } catch (err) {
        console.log(err.message)
        response.status(500).send({message: error.message});
    }
});



export default Food()