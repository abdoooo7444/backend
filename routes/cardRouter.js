const express = require('express') ;
const router = express.Router();
const cardController = require('../controller/cardController') ;

router.route('/')
.post(cardController.addcard)
.get(cardController.getcard) 


router.route('/:cardId')
.delete(cardController.deletecard)
.patch(cardController.updatecard)


module.exports = router ;