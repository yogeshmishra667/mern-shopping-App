import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../action/cartAction';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToCart(productId, qty));
    return () => {
      //
    };
  }, []);

  return <>cart</>;
}
