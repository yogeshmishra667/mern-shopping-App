import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/style/index.css';
import { listProduct } from '../action/index';

function Product_list(props) {
  //const [products, setProducts] = useState([]);
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProduct());
    //no need to fetch data in here because of use redux and in redux call api in action

    // const fetchData = async () => {
    //   const { data } = await axios.get('/api/products');
    //   setProducts(data);
    // };
    // fetchData();
    return () => {
      //
    };
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    products.map((product) => {
      return (
        <li className="product">
          <Link to={`/products/${product._id}`}>
            <img src={product.image} alt="slim shirt" className="product-img" />
          </Link>
          <div className="product-name">
            <Link to={`/products/${product._id}`}>{product.name}</Link>
          </div>
          <div className="product-brand">{product.brand}</div>
          <div className="product-price">${product.price}</div>
          <div className="product-rating">
            {product.rating} ({product.numReview})
          </div>
        </li>
      );
    })
  );
}

export default Product_list;
