import React, {useState, useEffect} from 'react';
import Title from './Title';

import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);
    const {categoriaId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection (querydb, 'items');
        
        if (categoriaId) {
            const queryFilter = query (queryCollection, 
                where('category', '==', categoriaId),);
                
            getDocs (queryFilter)
            .then ( (res) => setData (res.docs.map(item => ({id: item.id, ...item.data()}))))
        } else{
            getDocs (queryCollection)
                .then ( res => setData (res.docs.map(item => ({id: item.id, ...item.data()}))))
        }
    }, [categoriaId]);

    

    return (
        <>
            <Title greeting= {texto} />
            
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;
