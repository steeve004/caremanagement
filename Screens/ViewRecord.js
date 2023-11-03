/**
 * MAPD712 - group 3- milestone2
 * Adegbesan Adewale--301148489
 * Emeka Andrew Ekeke--301354233
 * Vijay Jannu--301413452
 */

import React from 'react';
import { StyleSheet, Text, SafeAreaView, Alert, View,TextInput, Button, TouchableOpacity} from 'react-native';


export default function ViewRecord({navigation})
{
  return (
    <View style={styles.container}>
      
      <View>
        <Text style={styles.label}>Enter patient email</Text>
        <TextInput
          style={styles.input}/> 
      </View>
      <View>
      <TouchableOpacity
          onPress={() => navigation.navigate('RecordData')}> 
            <Text style={styles.buttonText}>View Record</Text>
          </TouchableOpacity>
      </View>

</View> // main view close
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2645B1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
   marginTop: 80,
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 12,
  },
  input: {
    backgroundColor:'white',
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#2645B1',
    width: 220,
    height: 40,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 9,
  },
});
