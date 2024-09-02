import React, { createContext, useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { db } from '../../../backend/config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        const userDocRef = doc(db, 'MyCart', user.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          setCartItems(userDocSnap.data().items || []);
        }
      }
    };
    fetchCart();
  }, [user]);

  useEffect(() => {
    if (user) {
      const updateCart = async () => {
        const userDocRef = doc(db, 'MyCart', user.uid);
        await setDoc(userDocRef, { items: cartItems }, { merge: true });
      };
      updateCart();
    }
  }, [cartItems, user]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i._id === item._id);
      if (existingItem) {
        return prevItems.map(i =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item._id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
