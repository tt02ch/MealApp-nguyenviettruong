import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

// Header Component with Stylish Text
const HeaderTitle = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>School Foods</Text>
  </View>
);

// Stack Navigator for Meals
function MealsStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: '#FF6347' }, // Tomato color
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        contentStyle: { backgroundColor: '#f4f4f4' },
      }}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: 'Danh Mục' }} />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} options={{ title: 'Danh Sách Món Ăn' }} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{ title: 'Chi Tiết Món Ăn' }} />
    </Stack.Navigator>
  );
}

// Bottom Tabs Navigator
function TabNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'MealsTab') {
            iconName = 'food'; // MaterialCommunityIcons
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'FavoritesTab') {
            iconName = 'heart'; // AntDesign
            return <AntDesign name={iconName} size={size} color={color} />;
          } else if (route.name === 'SettingsTab') {
            iconName = 'settings'; // Ionicons
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#FF6347', // Tomato color
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#dcdcdc',
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 6,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        headerTitle: () => <HeaderTitle />,
        headerStyle: { backgroundColor: '#FF6347' },
        headerTintColor: '#fff',
      })}
    >
      <BottomTabs.Screen name="MealsTab" component={MealsStackNavigator} options={{ title: 'Món Ăn' }} />
      <BottomTabs.Screen name="FavoritesTab" component={FavoritesScreen} options={{ title: 'Yêu Thích' }} />
      <BottomTabs.Screen name="SettingsTab" component={SettingsScreen} options={{ title: 'Cài Đặt' }} />
    </BottomTabs.Navigator>
  );
}

export default function MealsNavigator() {
  return <TabNavigator />;
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
