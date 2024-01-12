// screens/LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput as PaperTextInput } from 'react-native-paper';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Implement your authentication logic here
      // For simplicity, let's just navigate to the Home screen for any input
      navigation.navigate('Home');
    };
  
    const handleForgotPassword = () => {
      // Implement your password recovery logic here
      // For example, navigate to a screen for password recovery
      navigation.navigate('ForgotPassword');
    };
  
    const handleNavigateToRegister = () => {
      console.log("Navigating to Register");
      navigation.navigate('Register');
    };
  
    return (
      <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.title}>Lost and Found</Text>
          <PaperTextInput
            label="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={styles.input}
          />
          <PaperTextInput
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
          />
          <Button title="Login" onPress={handleLogin} />
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
          {/* Debugging button */}
          <TouchableOpacity onPress={handleNavigateToRegister}>
            <Text style={styles.registerLink}>Create an Account</Text>
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
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    marginBottom: 20,
    borderRadius: 8,
  },
  forgotPassword: {
    color: 'white',
    marginTop: 10,
  },
});

export default LoginScreen;
