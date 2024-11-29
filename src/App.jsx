import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';
import "./main.css";

function App() {
  return (
    // Para usar el context, todos los componentes que requieran de este estado global se deben envolver en la etiqueta del context
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        {/* Definir rutas de la aplicación */}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/carrito" element={<Carrito />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
