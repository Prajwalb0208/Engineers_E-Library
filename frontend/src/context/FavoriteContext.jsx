import React, { createContext, useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { db } from '../../../backend/config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser); // Ensure user is tracked
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (user) {
        const userDocRef = doc(db, 'Favourites', user.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          setFavorites(userDocSnap.data().items || []);
        } else {
          setFavorites([]); // Initialize as empty array if no data
        }
      } else {
        setFavorites([]); // Initialize as empty array if no user
      }
    };
    fetchFavorites();
  }, [user]);

  useEffect(() => {
    if (user) {
      const updateFavorites = async () => {
        const userDocRef = doc(db, 'Favourites', user.uid);
        await setDoc(userDocRef, { items: favorites }, { merge: true });
      };
      updateFavorites();
    }
  }, [favorites, user]);

  const addToFavorites = (item) => {
    setFavorites(prevItems => {
      const existingItem = prevItems.find(i => i._id === item._id);
      if (!existingItem) {
        return [...prevItems, item];
      }
      return prevItems;
    });
  };

  const removeFromFavorites = (itemId) => {
    setFavorites(prevItems => prevItems.filter(item => item._id !== itemId));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};
