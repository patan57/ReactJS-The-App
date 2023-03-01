import React, {useState} from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const decrece = () => {
        setCount(count - 1);
    }

    const crece = () => {
        setCount(count + 1);
    }

    

    return(
        <div className='counter'>
            <button disabled={count <=1} onClick={decrece}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={crece}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;