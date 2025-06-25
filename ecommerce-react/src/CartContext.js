import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const updateQuantity = (id, qty) => {
    setCart(prev => prev.map(p => p.id === id ? { ...p, quantity: qty } : p));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
