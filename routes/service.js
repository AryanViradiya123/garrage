var express = require('express');

var router = express.Router();
const serviceController = require('../controllers/service')
const GetController = require('../controllers/service')
const UpdateController = require('../controllers/service')
const DeleteController = require('../controllers/service')


router.post('/create', serviceController.serviceCreate);
router.get('/find', GetController.serviceFind);
router.patch('/update', UpdateController.serviceUpdate);
router.delete('/delete', DeleteController.serviceDelete);

module.exports = router;