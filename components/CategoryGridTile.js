// components/CategoryGridTile.js
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext

const CategoryGridTile = ({ title, image, onPress }) => {
  const { isDarkMode } = useContext(ThemeContext); // Use theme context

  return (
    <View style={[styles.gridItem, isDarkMode ? styles.darkMode : styles.lightMode]}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
          <Image source={image} style={styles.image} />
          <Text style={[styles.title, isDarkMode ? styles.darkTitle : styles.lightTitle]}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 180,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
  },
  touchable: {
    flex: 1,
  },
  container: {
    flex: 1,
    borderRadius: 15,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
    fontWeight: 'bold',
  },
  darkMode: {
    backgroundColor: '#333',
  },
  lightMode: {
    backgroundColor: '#f8f9fa',
  },
  darkContainer: {
    backgroundColor: '#444',
    borderColor: '#555',
  },
  lightContainer: {
    backgroundColor: '#ffffff',
    borderColor: '#dee2e6',
  },
  darkTitle: {
    color: '#f8f9fa',
  },
  lightTitle: {
    color: '#212529',
  },
});

export default CategoryGridTile;
