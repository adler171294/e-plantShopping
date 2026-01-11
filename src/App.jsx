import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Products from './Products';
import Cart from './Cart'; // Saya asumsikan Chart.jsx adalah Cart.jsx

function App() {
  const [page, setPage] = useState('home');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const isExist = prevCart.find(item => item.id === product.id);
      if (isExist) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + amount) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="App">
      <Navbar setPage={setPage} cartCount={cartCount} />
      
      <main>
        {page === 'home' && (
          <section className="hero">
            <h1>Kebun Hijau</h1>
            <p>Bawa kesegaran alam ke dalam hunian Anda dengan koleksi tanaman hias terbaik kami.</p>
            <button onClick={() => setPage('products')} className="btn-get-started">
              Mulai Belanja
            </button>
          </section>
        )}

        {page === 'products' && (
          <Products addToCart={addToCart} cart={cart} />
        )}

        {page === 'cart' && (
          <Cart cart={cart} updateQuantity={updateQuantity} setPage={setPage} />
        )}
      </main>
    </div>
  );
}

export default App;