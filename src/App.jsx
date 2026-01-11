import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Productslist'; 
import AboutUs from './components/Aboutus';
import CartItem from './components/CartItem';
import { useSelector } from 'react-redux';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // Mengambil data dari Redux
  const cartItems = useSelector(state => state.cart.items);
  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === 'home') {
      setShowProductList(false);
      setShowCart(false);
    } else if (page === 'products') {
      setShowProductList(true);
      setShowCart(false);
    } else if (page === 'cart') {
      setShowCart(true);
      setShowProductList(false); // Pastikan list produk tertutup saat buka cart
    } else {
      setShowProductList(false);
      setShowCart(false);
    }
  };

  return (
    <div className="App">
      <Navbar setPage={navigateTo} cartCount={totalCartItems} />

      <main>
        {/* LANDING PAGE */}
        {!showProductList && !showCart && currentPage === 'home' && (
          <div className="home-landing">
            <div className="hero-content">
              <h1>Kebun Hijau</h1>
              <p>Bawa kesegaran alam ke dalam hunian Anda dengan koleksi tanaman hias terbaik kami.</p>
              <button 
                className="btn-get-started" 
                onClick={() => navigateTo('products')}
              >
                Mulai Belanja
              </button>
            </div>
          </div>
        )}

        {/* PRODUCT LIST */}
        {showProductList && !showCart && (
          <Products />
        )}

        {/* CART PAGE */}
        {showCart && (
          <CartItem onContinueShopping={() => navigateTo('products')} />
        )}

        {/* ABOUT US */}
        {currentPage === 'about' && !showProductList && !showCart && (
          <AboutUs />
        )}
      </main>
    </div>
  );
}

export default App;