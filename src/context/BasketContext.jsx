import React, { createContext, useContext, useState } from 'react';

const BasketContext = createContext();

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    const existingItem = basket.find(basketItem => 
      basketItem.name === item.name && basketItem.type === item.type
    );

    if (existingItem) {
      setBasket(basket.map(basketItem =>
        basketItem.id === existingItem.id
          ? { ...basketItem, quantity: basketItem.quantity + 1 }
          : basketItem
      ));
    } else {
      const newItem = {
        id: Date.now(),
        ...item,
        quantity: 1
      };
      setBasket([...basket, newItem]);
    }
  };

  const removeFromBasket = (itemId) => {
    setBasket(basket.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, change) => {
    setBasket(basket.map(item => {
      if (item.id === itemId) {
        const newQuantity = item.quantity + change;
        return newQuantity <= 0 ? null : { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(Boolean));
  };

  const getItemQuantity = (itemName, itemType) => {
    const item = basket.find(basketItem => 
      basketItem.name === itemName && basketItem.type === itemType
    );
    return item ? item.quantity : 0;
  };

  const getTotalItems = () => {
    return basket.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return basket.reduce((sum, item) => {
      const price = parseInt(item.price.replace('₹', '').replace(',', ''));
      return sum + (price * item.quantity);
    }, 0);
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const generateWhatsAppMessage = () => {
    if (basket.length === 0) return '';

    let message = "🎉 *Peeka Boo Events - Order Request* 🎉\n\n";
    message += "Hello! I would like to book the following services:\n\n";

    basket.forEach((item, index) => {
      const itemTotal = parseInt(item.price.replace('₹', '').replace(',', '')) * item.quantity;
      message += `${index + 1}. ${item.name} - ${item.price}`;
      if (item.quantity > 1) {
        message += ` (Qty: ${item.quantity}) = ₹${itemTotal.toLocaleString()}`;
      }
      message += `\n`;
    });

    message += `\n💰 *Total Amount: ₹${getTotalPrice().toLocaleString()}*\n\n`;
    message += "Please confirm availability and provide further details.\n\n";
    message += "Thank you! 🎊";

    return message;
  };

  return (
    <BasketContext.Provider value={{
      basket,
      addToBasket,
      removeFromBasket,
      updateQuantity,
      getItemQuantity,
      getTotalItems,
      getTotalPrice,
      clearBasket,
      generateWhatsAppMessage
    }}>
      {children}
    </BasketContext.Provider>
  );
};