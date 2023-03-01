import React, {useState, useEffect} from 'react';
import Title from './Title';

import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const films = [
    { id:1, image: "https://i.blogs.es/7ccbec/iron-man/1366_2000.jpg",category:'films', Title:"Iron Man"},
    { id:2, image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6B010F3BF27B0FD260E26C95493C71C3F86861DD569601958296E2598B58B9BB/scale?width=1200&aspectRatio=1.78&format=jpeg", category:'films', Title:"Iron Man 2"},
    { id:3, image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4BD2015EF858205D5FAB84E7299774B78AEE92D8C949664A3B8A041A04A0EEF9/scale?width=1200&aspectRatio=1.78&format=jpeg", category:'films',Title:"Iron Man 3"},
    { id:4, image: "https://sm.ign.com/ign_es/feature/m/marvels-ir/marvels-ironheart-explained-who-is-riri-williams_uuxm.jpg", category:'series',Title:"Iron Heart"},
    { id:5, image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2022/07/escena-postcreditos-ms-marvel-2757733.jpg?itok=vDAwSEYE", category:'series',Title:"Ms Marvel"},
    { id:6, image: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/01/Secret-Invasion-2.jpg?fit=1500%2C750&quality=55&strip=all&ssl=1", category:'series',Title:"Secret Invasion"},

];

export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 3000);
        });
        if (categoriaId) {
            getData.then(res => setData (res.filter (film => film.category === categoriaId)));    
        } else{
        getData.then(res => setData(res));
        }
    }, [categoriaId])

    

    return (
        <>
            <Title greeting= {texto} /> // o sino poder MCU donde dice texto nuevamente//
            
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;