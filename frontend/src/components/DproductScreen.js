import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveProduct } from '../action/productAction';
import Spinner from './spinner';

function ProductsScreen(props) {
  const [name, setName] = useState('');
  const [images, setImages] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');

  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      //
    };
  }, []); //if userIfo data change then it run 🔺

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct(
        name,
        images,
        brand,
        price,
        category,
        countInStock,
        description
      )
    );
  };
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>create product</h2>
          </li>

          <li>
            {loadingSave && (
              <div>
                <Spinner />
              </div>
            )}
            {errorSave && <div>{errorSave}</div>}
          </li>

          <li>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </li>

          <li>
            <label htmlFor="image">images</label>
            <input
              type="image"
              name="image"
              id="image"
              onChange={(e) => setImages(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="brand">brand</label>
            <input
              type="brand"
              name="brand"
              id="brand"
              onChange={(e) => setBrand(e.target.value)}
            ></input>
          </li>

          <li>
            <label htmlFor="price">price</label>
            <input
              type="price"
              name="price"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </li>

          <li>
            <label htmlFor="category">category</label>
            <input
              type="category"
              name="category"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            ></input>
          </li>

          <li>
            <label htmlFor="countInStock">countInStock</label>
            <input
              type="countInStock"
              name="countInStock"
              id="countInStock"
              onChange={(e) => setCountInStock(e.target.value)}
            ></input>
          </li>

          <li>
            <label htmlFor="description">description</label>
            <textarea
              type="description"
              name="description"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </li>

          <li>
            <button type="submit" className="button primary">
              Create
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}
export default ProductsScreen;
