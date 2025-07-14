import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, currency, deliveryCharge } = useContext(StoreContext);
  const navigate = useNavigate();

  // New state for promo code and discount
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  // Example valid promo codes (this could come from an API in a real scenario)
  const validPromoCodes = {
    'DISCOUNT10': 0.1, // 10% discount
    'SAVE250': 250,        // 5 currency units off
  };

  const handlePromoCodeSubmit = () => {
    if (validPromoCodes[promoCode]) {
      const discountValue = validPromoCodes[promoCode];
      setPromoError('');
      setPromoSuccess(`Promo Code "${promoCode}" applied successfully!`);
      
      if (typeof discountValue === 'number') {
        // Apply a fixed discount
        setDiscount(discountValue);
      } else if (typeof discountValue === 'number') {
        // Apply percentage discount
        setDiscount(getTotalCartAmount() * discountValue);
      }
    } else {
      setPromoError('Invalid promo code');
      setPromoSuccess('');
    }
  };

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{currency}{item.price}</p>
                  <div>{cartItems[item._id]}</div>
                  <p>{currency}{item.price * cartItems[item._id]}</p>
                  <p className='cart-items-remove-icon' onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal</p><p>{currency}{getTotalCartAmount()}</p></div>
            <hr />
            <div className="cart-total-details"><p>Delivery Fee</p><p>{currency}{getTotalCartAmount() === 0 ? 0 : deliveryCharge}</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b><b>{currency}{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryCharge - discount}</b></div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>Use "SAVE250" Code for flat 250/- Offer ! </p>
            <div className='cart-promocode-input'>
              <input 
                type="text" 
                placeholder='Promo code' 
                value={promoCode} 
                onChange={(e) => setPromoCode(e.target.value)} 
              />
              <button onClick={handlePromoCodeSubmit}>Apply</button>
            </div>
            {promoError && <p className="promo-error">{promoError}</p>}
            {promoSuccess && <p className="promo-success">{promoSuccess}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
