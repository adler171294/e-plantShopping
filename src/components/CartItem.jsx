import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Menghitung Total Harga Keseluruhan
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      // Menghapus 'Rp' dan titik agar bisa dihitung sebagai angka
      const price = parseFloat(item.cost.replace('Rp ', '').replace(/\./g, ''));
      return total + (price * item.quantity);
    }, 0).toLocaleString('id-ID');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const calculateTotalCost = (item) => {
    const price = parseFloat(item.cost.replace('Rp ', '').replace(/\./g, ''));
    return (price * item.quantity).toLocaleString('id-ID');
  };

  return (
    <div className="cart-page-container">
      <div className="cart-layout">
        
        {/* Kolom Kiri: Daftar Produk */}
        <div className="cart-items-section">
          <h2 className="section-title">Keranjang Belanja</h2>
          {cart.length === 0 ? (
            <div className="empty-msg">Keranjang Anda kosong</div>
          ) : (
            cart.map(item => (
              <div className="cart-item-card" key={item.name}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-cost">{item.cost}</div>
                  <div className="cart-item-quantity-row">
                    <button className="qty-btn" onClick={() => handleDecrement(item)}>-</button>
                    <span className="qty-value">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  <div className="cart-item-subtotal">Subtotal: Rp {calculateTotalCost(item)}</div>
                  <button className="delete-btn" onClick={() => dispatch(removeItem(item.name))}>Hapus</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Kolom Kanan: Ringkasan Pembayaran */}
        <div className="cart-summary-section">
          <div className="summary-card">
            <h3>Ringkasan Pesanan</h3>
            <div className="summary-row">
              <span>Total Item:</span>
              <span>{cart.reduce((s, i) => s + i.quantity, 0)} Tanaman</span>
            </div>
            <div className="summary-total-row">
              <span>Total Pembayaran:</span>
              <span className="total-price">Rp {calculateTotalAmount()}</span>
            </div>
            <button className="checkout-btn" onClick={() => alert('Pesanan akan diproses!')}>Checkout</button>
            <button className="continue-btn" onClick={onContinueShopping}>Lanjut Belanja</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartItem;