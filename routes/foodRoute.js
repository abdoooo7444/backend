const express = require('express') ;

const router = express.Router();
const foodcontroller = require('../controller/foodController') ;

router.route('/')
.post(foodcontroller.addfood)
.get(foodcontroller.getfood) 

router.route('/:foodId')
.delete(foodcontroller.deletefood)
.patch(foodcontroller.updatefood)


module.exports = router ;