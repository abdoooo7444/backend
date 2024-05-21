const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    kind : {
        type : String,
        required: false
    },
    Title : {
        type : String,
        required: false
    },
    description : {
        type : String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now // Set default value to current date/time
    },

    updatedAt : Date 

})

module.exports = mongoose.model("card", cardSchema);