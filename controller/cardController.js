const { validationResult } = require("express-validator");
const Card = require("../model/card_model");

const addcard = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }
    const newcard = new Card(req.body);
    try {
        await newcard.save();
        res.status(201).json(newcard);
    } catch (err) {
        console.error('Error saving property:', err); // Log the error
        res.status(500).json({ msg: 'Server error' });
    }
};

const getcard = async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
}

const deletecard = async (req, res) => {
    const id = req.params.cardId;
    console.log(id);
    try {
        const deletedCARD = await Card.findByIdAndDelete(id);
        if (!deletedCARD) {
            return res.status(404).json({ message: "Property not found!" });
        }
        res.json(deletedCARD);
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
}
const updatecard = async (req, res) => {
    const cardID = req.params.cardId;
    try {

        const cardUpdated = await card.updateOne({ _id: cardID }, { $set: { ...req.body } });
        res.status(200).json(cardUpdated);
    } catch (err) {
        return res.status(400).json({ success: false, msg: err.msg })
    }

}


module.exports = {
    addcard,
    getcard,
    deletecard,
    updatecard

}