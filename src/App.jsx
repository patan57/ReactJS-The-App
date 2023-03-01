import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cart from './componentes/Cart';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/NavBar';
import CartProvider from './context/CartContext';

function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detalle/:detalleId'  element={ <ItemDetailContainer />} />
          </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
