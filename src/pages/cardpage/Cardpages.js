import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../../Componet/Cards/Cards";
import './Cardpage.css'

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

  useEffect(() => {
    obtenerRecursos();
  }, {});
 const cardsencontrada = !search ? cards : cards.filter((personaje) => (personaje.name.toLowerCase().includes(search.toLowerCase())));
 

   
return (
    <>
      <div>
      <form className="d-flex m-4 w-75 buscador" role="search">
        <input className="form-control buscador border-primary me-2" type="search" placeholder="Coloca tu Nombre o numero de pedido" aria-label="Search" onChange={e=>setSearch(e.target.value)}/>
      </form>
      
        <div className="d-flex flex-wrap justify-content-between  m-5">
          {cardsencontrada.length > 0 ? (
            cardsencontrada.map((vape) => <Cards key={vape.id} {...vape} />)
          ) : (
            <p>cargando</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cardpages;
