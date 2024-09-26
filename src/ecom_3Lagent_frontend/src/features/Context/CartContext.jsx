import React, { createContext, useEffect, useState } from "react";

export const CartCounterContext = createContext();

export const CartCounterProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddCart = (id, item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === id);
    
    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  

  const handleQuantityChange = (id, change) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCartItems(updatedItems);
  };


  const handleAddQuantity = (id, quantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };


  
  const handleRemoveQuantity = (id, quantity) => {
    const updatedItems = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCartItems(updatedItems);
  };

  return (
    <CartCounterContext.Provider
      value={{
        cartItems,
        handleAddCart,
        handleQuantityChange,
        handleAddQuantity,
        handleRemoveQuantity,
      }}
    >
      {children}
    </CartCounterContext.Provider>
  );
};
