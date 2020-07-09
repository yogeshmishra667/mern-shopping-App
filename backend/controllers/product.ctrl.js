const Product = require('../model/productModel');
//import { isAuth, isAdmin } from '../util';

//for display product list
const productListCtrl = async (req, res) => {
  const products = await Product.find({});
  res.send(products);
};

//for create new product
const newProductCtrl = async (req, res) => {
  const product = new Product(req.body);

  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ message: 'New Product Created', data: newProduct });
  }
  return res.status(500).send({ message: ' Error in Creating Product.' });
};

module.exports = {
  productListCtrl,
  newProductCtrl,
};
