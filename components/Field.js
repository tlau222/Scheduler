import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const Field = ({label, value}) => {
    return (
      <View style={styles.fieldContainer}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.field}>{value}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    field: {
      height: 40,
      width: 300,
      padding: 5,
      backgroundColor: 'white',
    },
    fieldContainer: {
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    label: {
      fontWeight: 'bold',
    }
  });
  
  export default Field;