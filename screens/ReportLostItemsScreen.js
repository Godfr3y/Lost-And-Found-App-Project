import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput as PaperTextInput } from 'react-native-paper';

const ReportLostItemScreen = () => {
  const navigation = useNavigation();
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');

  const handleReportLostItem = () => {
    // Implement logic to report a lost item (e.g., send data to a server)
    // You may use a state management library like Redux for more complex apps
    console.log(`Item reported as lost: ${itemName}, Description: ${description}`);
    // Assuming a successful report, navigate back to the Home screen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report a Lost Item</Text>
      <PaperTextInput
        label="Item Name"
        value={itemName}
        onChangeText={(text) => setItemName(text)}
      />
      <PaperTextInput
        label="Description"
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button title="Report Lost Item" onPress={handleReportLostItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default ReportLostItemScreen;
