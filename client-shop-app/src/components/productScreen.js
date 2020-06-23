import React from 'react';
import data from '../data/data';

const productScreen = (props) => {
  const product = data.products.find((x) => {
    return x._id === props.match.params.id;
  });
  /* props.match.params.id is data type is string so this reason i put data like '1' if i'm put without column data is undefined   */

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};

export default productScreen;
