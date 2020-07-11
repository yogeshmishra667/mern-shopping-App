const express = require('express');
const ctrl = require('../controllers/product.ctrl');
const { isAuth, isAdmin } = require('../middleware/auth');

const router = express.Router();

// for product list
router.get('/', ctrl.productListCtrl);
//for checkout Screen
router.get('/:id', ctrl.checkoutCtrl);
//for create new product
router.post('/', isAuth, isAdmin, ctrl.newProductCtrl);
//for update product
router.put('/:id', isAuth, isAdmin, ctrl.updateCtrl);
//fot delete products
router.delete('/:id', isAuth, isAdmin, ctrl.deleteCtrl);
module.exports = router;
