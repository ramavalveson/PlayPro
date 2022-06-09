import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import CategoryContainer from './pages/CategoryContainer';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/item/:id" element={<Detail />} />
            <Route exact path="/category/:categoryId" element={<CategoryContainer />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;
