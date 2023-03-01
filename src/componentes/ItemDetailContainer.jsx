import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const films = [
    { id:1, image: "https://i.blogs.es/7ccbec/iron-man/1366_2000.jpg",category:'films', Title:"Iron Man"},
    { id:2, image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6B010F3BF27B0FD260E26C95493C71C3F86861DD569601958296E2598B58B9BB/scale?width=1200&aspectRatio=1.78&format=jpeg", category:'films', Title:"Iron Man 2"},
    { id:3, image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4BD2015EF858205D5FAB84E7299774B78AEE92D8C949664A3B8A041A04A0EEF9/scale?width=1200&aspectRatio=1.78&format=jpeg", category:'films',Title:"Iron Man 3"},
    { id:4, image: "https://sm.ign.com/ign_es/feature/m/marvels-ir/marvels-ironheart-explained-who-is-riri-williams_uuxm.jpg", category:'series',Title:"Iron Heart"},

];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise( resolve => {
            setTimeout (() => {
                resolve(films);
            }, 3000);
        });

        getData.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
    },[])


    return(
        <ItemDetail data ={data} />
    );
}

export default ItemDetailContainer;