import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../../Componet/Cards/Cards";
import './Cardpage.css'
import img from '../../img/color.jpg'

const Cardpages = () => {
  const [cards, setCards] = useState([]);
const [search, setSearch] = useState('')

  const obtenerRecursos = async () => {
    const response = await axios.get(
      `https://api.trello.com/1/boards/5em58d1f/cards?key=d95e1a92392ae9d2bb013198111dd565&token=ATTA348771c3acd94aa2276c3ad53c20893a90351e151fd1b425c1ebd2be8b8793fcEFE141AA`
    );
    const data = response.data;
    setCards(response.data);
    console.log(response.data);
  };

 
 const cardsencontrada = !search ? cards : cards.filter((personaje) => (personaje.name.toLowerCase().includes(search.toLowerCase())));
 

   
return (
    <>
      <div className="container d-flex row text-center justify-content-center w-100 ">
        <div className="all">

        </div>
        <img className="img " src={img} alt=""/>
      <form className=" m-4 buscador text-center w-100 " role="search">
        <h5 className="h5busc  text-center">Bienvenidos al sistema de rastreo de pedidos por favor ingresa su numero de pedido:</h5>
        <div class="input-group mb-3">
  <input  onChange={e=>setSearch(e.target.value)} type="number" class="form-control border-primary " placeholder="Nombre de Pedido" aria-label="Nombre de usuario del destinatario" aria-describedby="button-addon2"/>
  <button onClick={obtenerRecursos} class="btn btn-primary btn-outline-light" type="button" id="button-addon2">Buscar</button>
</div>
      </form>
      
        <div className="d-flex  flex-wrap justify-content-between cardss  ">
          {cardsencontrada.length > 0 ? (
            cardsencontrada.map((vape) => <Cards key={vape.id} {...vape} />)
          ) : (
            <p className="load"></p>
          )}
        </div>
        <div className=" w-100 justify-content-center text-center">
           <h3 className="h3contact  ">Si tienes alguna duda o no sabes tu numero de pedido, contáctenos haciendo click en el siguiente botón</h3>
            <a className="text-center" href="https://wa.link/5i79eu"><button type="button" class="btn btn-success  boton whats shadow">WhatsApp</button></a>
        </div>
      </div>
    </>
  );
};

export default Cardpages;
