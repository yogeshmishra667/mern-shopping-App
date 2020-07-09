const express = require('express');
const {
  newProductCtrl,
  productListCtrl,
} = require('../controllers/product.ctrl');

const router = express.Router();

// for product list
router.get('/', productListCtrl);
//for create new product
router.post('/', newProductCtrl);

module.exports = router;
