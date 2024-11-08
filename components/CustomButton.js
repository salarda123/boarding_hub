import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    padding: 15,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 10,
  },
  buttonText: {
    color: '#00B2E3',
    fontWeight: 'bold',
  },
});

export default CustomButton;
