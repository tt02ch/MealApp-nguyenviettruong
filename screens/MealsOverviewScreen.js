// screens/MealsOverviewScreen.js
import React, { useContext } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';
import { ThemeContext } from '../context/ThemeContext';
import { MEALS, CATEGORIES } from '../data/dummy-data';

const MealsOverviewScreen = ({ route, navigation }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter((meal) => meal.categoryId === categoryId);
  const category = CATEGORIES.find(cat => cat.id === categoryId);
  const categoryTitle = category ? category.title : 'Danh mục';

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryTitle]);

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.image}
        onPress={() => {
          navigation.navigate('MealDetail', { mealId: itemData.item.id });
        }}
      />
    );
  };

  return (
    <View style={[styles.screen, isDarkMode ? styles.darkMode : styles.lightMode]}>
      <FlatList 
        data={displayedMeals} 
        renderItem={renderMealItem} 
        keyExtractor={item => item.id} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  darkMode: {
    backgroundColor: '#333',
  },
  lightMode: {
    backgroundColor: '#f5f5f5',
  },
});

export default MealsOverviewScreen;
