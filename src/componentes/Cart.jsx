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

        products: cart.map ((item) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity
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
                cart.map((item) => (<ItemCart key={item.id} item={item} />))
            }
            <p>
                total: {totalPrice()}
            </p>
            <button onClick={handleClick}>Comprar</button>
        </>
    );
}

export default Cart;