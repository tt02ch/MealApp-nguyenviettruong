// components/MealItem.js
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext

const MealItem = ({ title, image, onPress }) => {
  const { isDarkMode } = useContext(ThemeContext); // Use theme context

  return (
    <TouchableOpacity onPress={onPress} style={[styles.mealItem, isDarkMode ? styles.darkMode : styles.lightMode]}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    flexDirection: 'row',
    height: 80, // Adjusted height for a smaller list item
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#fff', // Default background color
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // Adjusted elevation for a subtle shadow effect
    alignItems: 'center', // Center vertically
  },
  image: {
    width: 80, // Width of the image
    height: 80, // Height of the image
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: 'sans-serif-medium',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left', // Align text to the left
  },
  darkMode: {
    backgroundColor: '#333',
  },
  lightMode: {
    backgroundColor: '#fff',
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#333',
  },
});

export default MealItem;
