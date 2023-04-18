import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CardDetalles from '../../Componet/CardDetalles';

const Detalles = () => {
    const [cards, setCards] = useState([]);

    const obtenerRecursos = async () => {
      const response = await axios.get(
        `https://api.trello.com/1/boards/5em58d1f/cards?key=d95e1a92392ae9d2bb013198111dd565&token=ATTA348771c3acd94aa2276c3ad53c20893a90351e151fd1b425c1ebd2be8b8793fcEFE141AA`
      );
      const data = response.data;
      setCards(response.data);
      console.log(response.data);
    };
    const {id} = useParams()
    useEffect(() => {
      obtenerRecursos();
    }, {});

    const cardDetalle = cards.filter((recurso)=>recurso.id == id)

  return (
    <>
     <div className='container'>
    <div className='d-flex flex-wrap justify-content-around'>
    {
      cardDetalle.length > 0? (
        cardDetalle.map(recurso => (
          <CardDetalles key={recurso.id} {...recurso} />
        ))
      ) : (<p>cargando</p>)
    }
    </div>
    </div>
  
    </>
  )
}

export default Detalles