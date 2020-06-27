import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from './spinner';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../action/index';
import '../assets/style/index.css';
//import data from '../data/data';

const ProductScreen = (props) => {
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);
  // const product = data.products.find((x) => {
  //   return x._id === props.match.params.id;
  // });
  /* props.match.params.id is data type is string so this reason i put data like '1' if i'm put without column data is undefined   */

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">&#8678; back</Link>
      </div>
      {loading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={product.image} alt="slim shirt" />
          </div>

          <div className="details-info">
            <ul>
              <li>{product.name}</li>
              <li>{product.brand}</li>
              <li>
                {product.rating}star ({product.numReview})
              </li>
              <li>
                price:<b> ${product.price}</b>
              </li>
              <li>description: {product.description}</li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>price : ${product.price} </li>
              <li> status : {product.status}</li>
              <li>
                Qty:{' '}
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </li>
              <li>
                <button className="button">Add cart</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
