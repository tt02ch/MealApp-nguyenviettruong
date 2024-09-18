// screens/CategoriesScreen.js
import React, { useLayoutEffect, useContext } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data'; // Import dữ liệu
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext

const CategoriesScreen = ({ navigation }) => {
  const { isDarkMode } = useContext(ThemeContext); // Use theme context

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Danh mục', // Tiêu đề màn hình bằng tiếng Việt
    });
  }, [navigation]);

  const renderCategoryItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        image={itemData.item.image}
        onPress={() => {
          navigation.navigate('MealsOverview', { categoryId: itemData.item.id }); // Truyền categoryId vào
        }}
      />
    );
  };

  return (
    <View style={[styles.screen, isDarkMode ? styles.darkMode : styles.lightMode]}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  darkMode: {
    backgroundColor: '#333',
  },
  lightMode: {
    backgroundColor: '#f5f5f5',
  },
});

export default CategoriesScreen;
