/**
 * MAPD712 - group 3- milestone2
 * Adegbesan Adewale--301148489
 * Emeka Andrew Ekeke--301354233
 * Vijay Jannu--301413452
 */

import React from 'react';
import { StyleSheet, Text, Alert, SafeAreaView, View,TextInput, TouchableOpacity, } from 'react-native';


export default function PatientData({navigation})
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
            <Text style={styles.logo}>Smith John</Text>
            <Text style={styles.id}>ID : 000111222</Text>
        </View>

        <View style={styles.lightBackground}>
          <View style={styles.body}>
            <Text style={styles.label}>First Name: </Text>
            <Text style={styles.input}>John</Text>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Last Name: </Text>
            <Text style={styles.input}>Smith</Text>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>DOB: </Text>
            <Text style={styles.input}>10/24/1998</Text>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Gender: </Text>
            <Text style={styles.input}>Male</Text>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Age: </Text>
            <Text style={styles.input}>30</Text>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Telephone: </Text>
            <Text style={styles.input}>+1 6478890876</Text>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Address: </Text>
            <Text style={styles.input}>Toronto ON</Text>
          </View>  
        
          <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewPatient')}>
          <Text style={styles.buttonText}>BACK</Text>         
        </TouchableOpacity>
        </View>

        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },
  scrollView: {
    marginHorizontal: 10,
  },
  body: {
    marginTop: 10,
    flexDirection: 'row',
  },
  logo: {  
    fontSize: 32,
    color: 'black',
    marginTop:40,
    marginBottom:20,
    marginLeft: 170,
    fontWeight: "bold",
  },
  id :{
   fontSize: 12,
   color: 'white',
   marginBottom:20,
   marginLeft: 170,

  },
  label: {
    fontSize: 20,
    width: 100,
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
    backgroundColor: '#5B9F8F',
  },
  lightBackground: {
    backgroundColor: '#5B9F8F',
    alignItems: 'center',
    borderRadius: 20,
    margin: 30,
    padding: 20,
  },
  button: {
    backgroundColor: '#0A5341',
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
