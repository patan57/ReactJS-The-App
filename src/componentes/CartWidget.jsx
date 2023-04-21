import React from 'react';
import { useCartContext } from '../context/CartContext';

export const CartWidget = () => {
    const {totalItems}= useCartContext();
        return (
        <>
        <i className="bi bi-cart4"></i>
        <span> {totalItems() || ""} </span>
        </>
    );
}

export default CartWidget;