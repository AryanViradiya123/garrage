var express = require('express');

var router = express.Router();
const requestController = require('../controllers/request')
const GetController = require('../controllers/request')
const UpdateController = require('../controllers/request')
const DeleteController = require('../controllers/request')


router.post('/create', requestController.requestCreate);
router.get('/find', GetController.requestFind);
router.patch('/update', UpdateController.requestUpdate);
router.delete('/delete', DeleteController.requestDelete);
 
module.exports = router;    