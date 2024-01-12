import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Implement logic to handle user logout (e.g., clear authentication token)
    // You may use a state management library like Redux for more complex apps
    console.log('User logged out');
    // Assuming a successful logout, navigate back to the Login screen
    navigation.navigate('Login');
  };

  // Mock user data (replace this with actual user data from your authentication system)
  const user = {
    username: 'godfrey123',
    email: 'rodriguez.godfrey3003@gmail.com',
    avatar: require('../assets/avatar.png'), // Add a path to your user's avatar image
    bio: 'Passionate explorer, tech enthusiast, and dog lover.',
    joinedDate: 'Joined in January 2024',
  };

  return (
    <View style={styles.container}>
      <Image source={user.avatar} style={styles.avatar} />
      <Text style={styles.title}>User Profile</Text>
      <View style={styles.userInfo}>
        <Text style={styles.userInfoText}>Username: {user.username}</Text>
        <Text style={styles.userInfoText}>Email: {user.email}</Text>
        <Text style={styles.userInfoText}>Bio: {user.bio}</Text>
        <Text style={styles.userInfoText}>{user.joinedDate}</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  userInfo: {
    marginBottom: 24,
    alignItems: 'center',
  },
  userInfoText: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#ff6666', // Custom color for the logout button
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;
