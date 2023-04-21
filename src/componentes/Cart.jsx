import { addDoc, getFirestore, collection } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCart from './ItemCart';


export const Cart = () => {
    const { cart, totalPrice} = useCartContext();
    
    const ordenDeCompra = {
        comprador : {
            nombre:'Mauro',
            email:'mauro@gmail.com',
            telefono:'1155443322',
            domicilio:'Michigan avenue 1234'
        },
        items: cart.map ((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity
        })),
        total: totalPrice(),
    }

    const handleClick= () => {
        const db = getFirestore();
        const ordenesDeCompraCollection = collection (db, 'ordenesDeCompra');
        addDoc(ordenesDeCompraCollection, ordenDeCompra).then (({id}) => console.log(id));
    };

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to= '/'> Hacer compras </Link>
            </>
        );
    }
    
    return(
        <>
            {
                cart.map((product) => (<ItemCart key={product.id} product={product} />))
            }
            <p>
                total: {totalPrice()}
            </p>
            <button onClick={handleClick}>Comprar</button>
        </>
    );
}

export default Cart;