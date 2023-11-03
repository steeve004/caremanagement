/**
 * MAPD712 - group 3- milestone2
 * Adegbesan Adewale--301148489
 * Emeka Andrew Ekeke--301354233
 * Vijay Jannu--301413452
 */

import React from 'react';
import { StyleSheet, Text, Alert, SafeAreaView, View,TextInput, TouchableOpacity, } from 'react-native';


export default function AddRecord({navigation})
{

  const btnPressed= () =>
  Alert.alert(
    "Success",
    "Record Added Successfully",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.darkBackground}>
            <Text style={styles.title}>Patient Record</Text>
        </View>

        <View style={styles.lightBackground}>
          <View style={styles.body}>
            <Text style={styles.label}>Height: </Text>
            <TextInput
                style={styles.input}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Weight: </Text>
            <TextInput
                style={styles.input}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Blood Group: </Text>
            <TextInput
                style={styles.input}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Blood pressure: </Text>
            <TextInput
                style={styles.input}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Respiratory Rate: </Text>
            <TextInput
                style={styles.input}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Blood oxygen Level: </Text>
            <TextInput
                style={styles.input}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Heart Beat Rate: </Text>
            <TextInput
                style={styles.input}/>
          </View>  
        
          <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewPatient')}>
          <Text style={styles.buttonText}>Add Record</Text>         
        </TouchableOpacity>
        </View>

        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    marginHorizontal: 10,
  },
  body: {
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {  
    fontSize: 32,
    color: 'white',
    marginTop:60,
    marginBottom:20,
    marginLeft: 20,
    fontWeight: "bold",
  },
  label: {
    fontSize: 20,
    width: 90,
    margin: 12,
  },
  input: {
    height: 40,
    width: 220,
    margin: 10,
    backgroundColor: 'white',
    fontSize: 18,
    padding: 10,
    borderRadius: 10,
  },
  darkBackground: {
    backgroundColor: '#2645B1',
  },
  lightBackground: {
    backgroundColor: '#D8E0FF',
    alignItems: 'center',
    borderRadius: 20,
    margin: 20,
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
