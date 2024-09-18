// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MealsNavigator from './navigation/MealsNavigator';
import { FavoritesProvider } from './context/FavoritesContext'; // Import provider
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <FavoritesProvider>
          <MealsNavigator />
        </FavoritesProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
