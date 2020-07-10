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

//for update product
const updateCtrl = async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.brand = req.body.brand;
    product.category = req.body.category;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    const updatedProduct = await product.save();
    if (updatedProduct) {
      return res
        .status(200)
        .send({ message: 'Product Updated', data: updatedProduct });
    }
  }
  return res.status(500).send({ message: ' Error in Updating Product.' });
};

module.exports = {
  productListCtrl,
  newProductCtrl,
  updateCtrl,
};
