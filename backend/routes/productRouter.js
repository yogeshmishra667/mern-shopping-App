const express = require('express');
const ctrl = require('../controllers/product.ctrl');

const router = express.Router();

// for product list
router.get('/', ctrl.productListCtrl);
//for create new product
router.post('/', ctrl.newProductCtrl);

module.exports = router;
