import React, { useState } from 'react';
import CartContext from './CartContext';
import ProductItem from './ProductItem';
import Cart from './Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const value = { cartItems, addToCart, removeFromCart };

  return (
    <CartContext.Provider value={value}>
      <ProductItem itemId={1} itemName="Widget" price={19.99} />
      <ProductItem itemId={2} itemName="Gadget" price={29.99} />
      <Cart />
    </CartContext.Provider>
  );
}

export default App;