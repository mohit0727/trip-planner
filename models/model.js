const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    country: {
        required: true,
        type: String
    },
    interests: {
        type: String
    },
    no_of_travellers: {
        type: Number
    },
    no_of_days: {
        type: Number
    },
    season: {
        type: String
    },
    budget: {
        type: String
    },
    food_options: {
        type: String
    },
    type_of_stay: {
        type: String
    },
    mode_of_travel: {
        type: String
    },
    mode_of_travel_within_city: {
        type: String
    },
    travel_plan: {
        type: String
    },
    subsciption: {
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)