import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../spinner';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../../action/index';
import '../../assets/style/index.css';

const ProductScreen = (props) => {
  //for dropdown menu
  const [Qty, setQty] = useState(1);
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

  const redirectCartPage = () => {
    props.history.push(`/cart/${props.match.params.id}?Qty=${Qty}`);
  };
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
              <li>
                {' '}
                status :{' '}
                {product.countInStock > 0 ? 'In stock' : 'out of stock'}
              </li>
              <li>
                Qty:
                <select value={Qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                {product.countInStock > 0 && (
                  <button className="button" onClick={redirectCartPage}>
                    Add cart
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
