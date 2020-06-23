import React from 'react';
import data from '../data/data';

const productScreen = (props) => {
  const product = data.products.find((x) => {
    x._id === props.match.params.id;
  });
  console.log(props.match.params.id);
  return <h1>{product.name}</h1>;
};

export default productScreen;
