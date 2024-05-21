// const { validationResult } = require("express-validator");
const Foods = require("../model/foodModel");



const addfood = async (req, res) => {

    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json(errors.array());
    // }

    const newfood = new Foods(req.body);
    try {
        await newfood.save();
        res.status(201).json(newfood);
    } catch (err) {
        console.error('Error saving property:', err); // Log the error
        res.status(500).json({ msg: 'Server error' });
    }
};

const getfood =  async (req, res) => {
    try {
        const foods = await Foods.find();
        res.json(foods);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
}
const deletefood =  async (req, res) => {
    const data = await Foods.deleteOne({ _id: req.params.foodId });
    res.status(200).json({ success: true, msg: data });

}
const updatefood = async (req,res) => {
    const foodID = req.params.foodId;
    try {

        const foodUpdated = await Foods.updateOne({ _id: foodID }, { $set: { ...req.body }});
        res.status(200).json(foodUpdated) ;
    }catch(err){
    return res.status(400).json({ success :false , msg : err.msg})
    }

}


module.exports = {
    addfood ,
    getfood ,
   deletefood,
   updatefood

}