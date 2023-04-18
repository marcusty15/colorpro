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
        <div class="card-body">
        <Link className="link" to={`/detalles/${id}`}><h5 className="card-title h">{name}</h5></Link>
         
          
       
          
         
        </div>
        </div>
      </div>
    </div>
        </>
    
  );
};

export default Cards;
