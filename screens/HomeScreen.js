// screens/HomeScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleReportLostItem = () => {
    navigation.navigate('ReportLostItem');
  };

  const handleSearchItems = () => {
    navigation.navigate('SearchItems');
  };

  const handleViewFoundItems = () => {
    navigation.navigate('FoundItems');
  };

  const handleUserProfile = () => {
    navigation.navigate('UserProfile');
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Lost and Found</Text>
        <TouchableOpacity style={styles.button} onPress={handleReportLostItem}>
          <Text style={styles.buttonText}>Report Lost Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSearchItems}>
          <Text style={styles.buttonText}>Search Lost Items</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleViewFoundItems}>
          <Text style={styles.buttonText}>View Found Items</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleUserProfile}>
          <Text style={styles.buttonText}>User Profile</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    paddingVertical: 15,
    marginBottom: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HomeScreen;
