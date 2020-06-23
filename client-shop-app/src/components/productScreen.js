import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data';

const productScreen = (props) => {
  const product = data.products.find((x) => {
    return x._id === props.match.params.id;
  });
  /* props.match.params.id is data type is string so this reason i put data like '1' if i'm put without column data is undefined   */
  return (
    <div>
      <div className="back-to-result">
        <Link to="/">&#8678; back</Link>
      </div>

      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="slim shirt" />
        </div>

        <div className="details-info">
          <ul>
            <li>{product.name}</li>
            <li>{product.brand}</li>
            <li>
              {product.rating} ({product.numReview})
            </li>
            <li>
              <b>${product.price}</b>
            </li>
            <li>{product.description}</li>
          </ul>
        </div>
        <div className=".details-action"></div>
      </div>
    </div>
  );
};

export default productScreen;
