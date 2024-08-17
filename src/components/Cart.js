import React from 'react';
import logo from "../logo.svg"
const Cart = ({ cart, updateQuantity, removeFromCart, coupon, setCoupon }) => {
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateDiscount = (subtotal) => {
    return coupon === 'DISCOUNT10' ? subtotal * 0.10 : 0;
  };

  const subtotal = calculateSubtotal();
  const discount = calculateDiscount(subtotal);
  const total = subtotal - discount;

  return (
    <div className="h-[80vh] flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex items-center border-b py-2">
                <img src={logo || item.image} alt={item.name} className="w-20 h-20 object-cover" />
                <div className="ml-4">
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-lg">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button
                      className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="border-t pt-4 px-4 bg-white">
          <label htmlFor="coupon" className="block mb-2 text-lg font-bold">Enter Coupon Code:</label>
          <input
            type="text"
            id="coupon"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="border p-2 w-full mb-4"
            placeholder="Enter coupon code"
          />
          <p className="text-xl">Subtotal: ${subtotal.toFixed(2)}</p>
          {coupon === 'DISCOUNT10' && (
            <p className="text-xl">Discount: -${discount.toFixed(2)}</p>
          )}
          <p className="text-2xl font-bold">Total: ${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
