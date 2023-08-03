const express = require('express');
const Model = require('../models/model');
const { log } = require('console');

const router = express.Router()

router.post('/travel-plan', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country || '',
        interests: req.body.interests || '',
        no_of_travellers: req.body.no_of_travellers || '',
        no_of_days: req.body.no_of_days || '',
        budget: req.body.budget || '',
        food_options: req.body.food_options || '',
        type_of_stay: req.body.type_of_stay || '',
        mode_of_travel: req.body.mode_of_travel || '',
        mode_of_travel_within_city: req.body.mode_of_travel_within_city || '',
        travel_plan: req.body.travel_plan || '',
        subsciption: req.body.subsciption || '',
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/travel-plan', async (req, res) => {
    const data = await Model.find();
    res.send(data)
})

module.exports = router;