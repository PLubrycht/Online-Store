import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevItems) => {
      const index = prevItems.findIndex(item => item.id === productId);
      if (index !== -1) {
        const updated = [...prevItems];
        updated.splice(index, 1); // usuń tylko jedną sztukę tego produktu
        return updated;
      }
      return prevItems;
    });
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
