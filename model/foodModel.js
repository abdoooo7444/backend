const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name: {
        type: String,
        // required: [true, "foodname is required"],
    },
    imageUrl: {
        type: String,
        // required: [true, "img is required"],
    },
    price: {
        type: Number,
        // required: [true, "price is required"],
    },
    totalPrice: {
        type: Number,
        // required: [true, "price is required"],
    },
    phone: {
        type: String,
        // required: [true, "totalPrice is required"],
    },
    credit: {
        type: String,
        // required: [true, "totalPrice is required"],
    },
    password: {
        type: String,
        // required: [true, "totalPrice is required"],
    },

    createdAt: {
        type: Date,
        default: Date.now // Set default value to current date/time
    },

    updatedAt: Date

})

module.exports = mongoose.model("food", foodSchema);