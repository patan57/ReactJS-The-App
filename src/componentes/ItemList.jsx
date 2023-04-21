import React from 'react';
import Item from './Item';

export const ItemList = ({data = []}) => {
    return (
        data.map((film) => {
            return(<Item key={film.id} informacion={film} />);
        } 
    )
    )
};

export default ItemList;