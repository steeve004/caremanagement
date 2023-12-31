/**
* MAPD712 - group 3- milestone2
 * Adegbesan Adewale--301148489
 * Emeka Andrew Ekeke--301354233
 * Vijay Jannu--301413452
 */

import React from 'react';
import { StyleSheet, Text, Alert, SafeAreaView, View,TextInput, TouchableOpacity, } from 'react-native';


export default function RecordData({navigation})
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
            <Text style={styles.label}>Blood Pressure: </Text>
            <Text style={styles.input}>110 mmhm</Text>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Respiratory Rate: </Text>
            <Text style={styles.input}>15 /min</Text>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Blood Oxygen Level: </Text>
            <Text style={styles.input}>86%</Text>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Heart Beat Rate: </Text>
            <Text style={styles.input}>72 /min</Text>
          </View>

        
          <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.buttonText}>Return Home</Text>         
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
