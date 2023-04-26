import React from 'react';
import { useCartContext } from '../context/CartContext';

const ItemCart = ({item}) => {
    const {removeItem} = useCartContext();
        return (
            <div className='itemCart'>
                <img src={item.image} alt={item.title} />
                <div>
                    <p>Título: {item.image}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio u.: {item.price}</p>
                    <p>Subtotal: ${item.quantity* item.price}</p>
                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </div>
            </div>
    )
    }

    export default ItemCart;