const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer');

router.get('/',customerController.getcustomerList);
router.get('/:id',customerController.getonecustomer);
router.post('/createUser',customerController.createCustomer);
router.delete('/:id',customerController.deleteOneuser);

module.exports= router;