import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, FlatList, Platform, Linking } from 'react-native';
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for icons

const SettingOption = ({ title, value, onToggle }) => {
  return (
    <View style={styles.optionContainer}>
      <Text style={styles.optionTitle}>{title}</Text>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: '#767577', true: '#4CAF50' }}
        thumbColor={value ? '#fff' : '#f4f3f4'}
      />
    </View>
  );
};

const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext); // Use ThemeContext

  const settingsOptions = [
    {
      id: '1',
      title: 'Chế độ tối',
      value: isDarkMode,
      onToggle: toggleTheme,
    },
    {
      id: '2',
      title: 'Tùy chọn khác',
      value: false,
      onToggle: () => {},
    },
  ];

  const handleContactPress = () => {
    Linking.openURL('mailto:nguyenviettruong1808@gmail.com');
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <FlatList
        data={settingsOptions}
        renderItem={({ item }) => (
          <SettingOption
            title={item.title}
            value={item.value}
            onToggle={item.onToggle}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity
        style={styles.contactButton}
        onPress={handleContactPress}
      >
        <Ionicons name="mail-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
        <Text style={[styles.contactText, isDarkMode ? styles.darkText : styles.lightText]}>Liên hệ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  lightContainer: {
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    flexGrow: 1,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212529',
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    marginTop: 20,
    justifyContent: 'center',
  },
  contactText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
});

export default SettingsScreen;
