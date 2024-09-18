import React, { useContext, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign
import { FavoritesContext } from '../context/FavoritesContext';
import { MEALS } from '../data/dummy-data';
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const { isDarkMode } = useContext(ThemeContext); // Use theme context

  // State and animation for heart icon
  const [animation, setAnimation] = useState(new Animated.Value(1));
  
  // Tìm món ăn dựa trên mealId
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const isFavorite = favorites.includes(mealId);

  const handleFavoritePress = () => {
    // Trigger heart animation
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    // Add or remove favorite
    if (isFavorite) {
      removeFavorite(mealId);
    } else {
      addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    if (selectedMeal) {
      navigation.setOptions({
        title: selectedMeal.title,
        headerRight: () => (
          <TouchableOpacity
            onPress={handleFavoritePress}
            style={styles.favoriteButton}
          >
            <Animated.View style={{ transform: [{ scale: animation }] }}>
              <AntDesign
                name={isFavorite ? 'heart' : 'hearto'}
                size={24}
                color={isFavorite ? 'red' : (isDarkMode ? '#bbb' : '#ccc')}
              />
            </Animated.View>
          </TouchableOpacity>
        ),
      });
    }
  }, [navigation, selectedMeal, isFavorite, animation]);

  return (
    <ScrollView
      contentContainerStyle={[styles.screen, isDarkMode ? styles.darkMode : styles.lightMode]}
    >
      {selectedMeal ? (
        <View style={styles.container}>
          <Image source={selectedMeal.image} style={styles.image} />
          <Text style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>{selectedMeal.title}</Text>
          <Text style={[styles.description, isDarkMode ? styles.darkText : styles.lightText]}>{selectedMeal.description}</Text>
          <View style={styles.detailsContainer}>
            <Text style={[styles.details, isDarkMode ? styles.darkText : styles.lightText]}>Thời gian: {selectedMeal.duration} phút</Text>
            <Text style={[styles.details, isDarkMode ? styles.darkText : styles.lightText]}>Độ phức tạp: {selectedMeal.complexity.charAt(0).toUpperCase() + selectedMeal.complexity.slice(1)}</Text>
            <Text style={[styles.details, isDarkMode ? styles.darkText : styles.lightText]}>Độ ngon: {selectedMeal.affordability.charAt(0).toUpperCase() + selectedMeal.affordability.slice(1)}</Text>
          </View>
          <View style={styles.ingredientsContainer}>
            <Text style={[styles.subTitle, isDarkMode ? styles.darkText : styles.lightText]}>Nguyên liệu:</Text>
            {selectedMeal.ingredients.map((ingredient, index) => (
              <Text key={index} style={[styles.ingredient, isDarkMode ? styles.darkText : styles.lightText]}>{`- ${ingredient}`}</Text>
            ))}
          </View>
          <View style={styles.stepsContainer}>
            <Text style={[styles.subTitle, isDarkMode ? styles.darkText : styles.lightText]}>Các bước thực hiện:</Text>
            {selectedMeal.steps.map((step, index) => (
              <Text key={index} style={[styles.step, isDarkMode ? styles.darkText : styles.lightText]}>{`${index + 1}. ${step}`}</Text>
            ))}
          </View>
        </View>
      ) : (
        <Text style={[styles.loadingText, isDarkMode ? styles.darkText : styles.lightText]}>Loading...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsContainer: {
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  details: {
    fontSize: 16,
    marginBottom: 5,
  },
  ingredientsContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ingredient: {
    fontSize: 16,
  },
  stepsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  step: {
    fontSize: 16,
    marginBottom: 5,
  },
  favoriteButton: {
    marginRight: 15,
  },
  darkMode: {
    backgroundColor: '#333',
  },
  lightMode: {
    backgroundColor: '#f9f9f9',
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#333',
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default MealDetailScreen;
