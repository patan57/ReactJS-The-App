import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

const Item = ({informacion}) => {
    
    return(
        <Link to={`/detalle/${informacion.id}`} className='film'>
            <img src={informacion.image} alt="" />
            <p>{informacion.Title}</p>
        </Link>
    );
}

export default Item;