import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import DiscountBanner from './components/DiscountBanner';

function App() {
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState('');

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ));
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <DiscountBanner />
      <header className="bg-blue-500 text-white p-4 sticky top-8 z-40">
        <h1 className="text-3xl">E-Commerce Shopping Cart</h1>
      </header>
      <div className="flex">
        <div className={`w-full ${cart.length > 0 ? 'lg:w-3/4' : ''} transition-all duration-300`}>
          <ProductList addToCart={addToCart} />
        </div>
        {cart.length > 0 && (
          <div className="w-full lg:w-1/4 h-screen p-4 bg-gray-100 overflow-y-auto fixed right-0 top-0 mt-32">
            <Cart 
              cart={cart} 
              updateQuantity={updateQuantity} 
              removeFromCart={removeFromCart} 
              coupon={coupon}
              setCoupon={setCoupon}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

