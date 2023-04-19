import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import './Cards.css'

const Cards = (props) => {
 
 const {name, id} = (props)
  return (
        <>
        
      <div>
              
      <div class="card mb-5 border-primary" >
      <div className="container">
      <Link className="link" to={`/detalles/${id}`}><div class="card-body">
        <h5 className="card-title text-center h">{name}</h5>
         <h4 className="h4c">PRESIONAME</h4>
        </div></Link>
        </div>
      </div>
    </div>
        </>
    
  );
};

export default Cards;
