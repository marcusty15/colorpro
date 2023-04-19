import logo from './logo.svg';
import {  Routes, Route,  } from "react-router-dom";

import './App.css';
import Cards from './Componet/Cards/Cards';
import Cardpages from './pages/cardpage/Cardpages';
import Detalles from './pages/detalles/Detalles';
import Footer from './Componet/Footer/Footer';

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Cardpages/>}/>
      <Route exact path='/detalles/:id' element={<Detalles/>}/>

    </Routes>
    <Footer/>
      
    </>
  );
}

export default App;
