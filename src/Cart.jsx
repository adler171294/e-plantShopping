import React from 'react';

const Cart = ({ cart, updateQuantity, setPage }) => {
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-page-wrapper">
      <div className="cart-container">
        {/* Kolom Kiri: Daftar Produk */}
        <div className="cart-items-section">
          <h2 className="cart-title">Keranjang Belanja ({totalItems} Tanaman)</h2>
          
          {cart.length === 0 ? (
            <div className="empty-cart-msg">
              <p>Wah, keranjangmu masih kosong!</p>
              <button onClick={() => setPage('products')} className="btn-continue">Mulai Belanja Sekarang</button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item-card">
                <img src={item.img} alt={item.name} className="cart-item-img" />
                
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="unit-price">Rp {item.price.toLocaleString()}</p>
                  
                  <div className="qty-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>

                <div className="cart-item-subtotal">
                  <p>Subtotal</p>
                  <strong>Rp {(item.price * item.quantity).toLocaleString()}</strong>
                  <button onClick={() => updateQuantity(item.id, -item.quantity)} className="btn-delete">Hapus</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Kolom Kanan: Summary */}
        {cart.length > 0 && (
          <div className="cart-summary-section">
            <div className="summary-card">
              <h3>Ringkasan Pesanan</h3>
              <div className="summary-row">
                <span>Total Item</span>
                <span>{totalItems} Tanaman</span>
              </div>
              <div className="summary-row total">
                <span>Total Harga</span>
                <span>Rp {totalPrice.toLocaleString()}</span>
              </div>
              
              <button className="btn-checkout-full" onClick={() => alert("Pesanan Anda sedang diproses!")}>
                Checkout Sekarang
              </button>
              
              <button onClick={() => setPage('products')} className="btn-back-link">
                ← Lanjut Belanja
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;