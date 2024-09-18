// screens/FavoritesScreen.js
import React, { useContext } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign
import { FavoritesContext } from '../context/FavoritesContext';
import { MEALS } from '../data/dummy-data';
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext

const FavoritesScreen = ({ navigation }) => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);
  const { isDarkMode } = useContext(ThemeContext); // Use theme context

  const favoriteMeals = MEALS.filter(meal => favorites.includes(meal.id));

  const renderMealItem = (itemData) => {
    return (
      <View style={[styles.itemContainer, isDarkMode ? styles.darkMode : styles.lightMode]}>
        <Image source={itemData.item.image} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>{itemData.item.title}</Text>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => removeFavorite(itemData.item.id)}
          >
            <AntDesign
              name="heart"
              size={24}
              color="red"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.screen, isDarkMode ? styles.darkMode : styles.lightMode]}>
      {favoriteMeals.length > 0 ? (
        <FlatList
          data={favoriteMeals}
          renderItem={renderMealItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={[styles.noFavoritesText, isDarkMode ? styles.darkText : styles.lightText]}>Hiện không có món nào yêu thích.</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Categories')}>
            <Text style={styles.buttonText}>Quay lại Danh Mục</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
  },
  listContainer: {
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    padding: 20,
    margin: 10,
  },
  noFavoritesText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF6F61',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    flex: 1,
  },
  favoriteButton: {
    padding: 10,
  },
  darkMode: {
    backgroundColor: '#333',
  },
  lightMode: {
    backgroundColor: '#f5f5f5',
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#333',
  },
});

export default FavoritesScreen;
