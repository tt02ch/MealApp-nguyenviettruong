import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (mealId) => {
    setFavorites((prevFavorites) => {
      // Chỉ thêm nếu món ăn chưa có trong danh sách yêu thích
      if (!prevFavorites.includes(mealId)) {
        return [...prevFavorites, mealId];
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (mealId) => {
    setFavorites((prevFavorites) => prevFavorites.filter(id => id !== mealId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};