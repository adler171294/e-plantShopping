import React from 'react';

const Navbar = ({ setPage, cartCount }) => {
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => setPage('home')}>Kebun Hijau</div>
      <div className="nav-links">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('products')}>Produk</button>
        <button onClick={() => setPage('cart')} className="cart-nav">
          🛒 <span>{cartCount}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;