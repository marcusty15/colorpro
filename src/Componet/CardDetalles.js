import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const CardDetalles = (props) => {
    const [details, setDetails] = useState([])

    const {id} = props

    const obtenerDetalles = async () => {
        const response = await axios.get(
          `https://api.trello.com/1/cards/${id}/list?key=d95e1a92392ae9d2bb013198111dd565&token=ATTA348771c3acd94aa2276c3ad53c20893a90351e151fd1b425c1ebd2be8b8793fcEFE141AA`
        );
        const data = response.data;
        setDetails(response.data);
        console.log(response.data);
      };

      useEffect(() => {
        obtenerDetalles();
      }, {});

      const {name} = details
  return (
    <div>
        <div className='container m-5'>
      <div class="card mt-5" >
        
        <div class="card-body">
            <h1>SU PEDIDO ESTA:</h1>
        <h5 class="card-title">{name}</h5>
          
          <div className="container">
       
          
         <Link to="/"> <button type="button" class="btn btn-primary">volver</button></Link>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CardDetalles