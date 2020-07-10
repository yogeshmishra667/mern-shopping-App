const express = require('express');
const ctrl = require('../controllers/product.ctrl');

const router = express.Router();

// for product list
router.get('/', ctrl.productListCtrl);
//for create new product
router.post('/', ctrl.newProductCtrl);
//for update product
router.put('/:id', ctrl.updateCtrl);
module.exports = router;
