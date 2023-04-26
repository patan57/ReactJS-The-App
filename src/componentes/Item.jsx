import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ info }) => {
    
    return(
        <Link to={`/detalle/${info.id}`} className="film">
            <img src={info.image} alt="" />
            <p>{info.Title}</p>
        </Link>
    );
}

export default Item;