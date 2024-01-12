import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState();
  const navigation = useNavigation();

  const handleSendResetLink = () => {
    // Implement logic to send a password reset link to the provided email
    // You may use a backend service for this
    console.log(`Password reset link sent to: ${email}`);
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <PaperTextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <Button title="Send Reset Link" onPress={handleSendResetLink} />
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
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    marginBottom: 20,
    borderRadius: 8,
  },
  registerLink: {
    color: 'white',
    marginTop: 20,
  },
});

export default ForgotPasswordScreen;
