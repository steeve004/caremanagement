/**
 * MAPD712 - group 3- milestone2
 * Adegbesan Adewale--301148489
 * Emeka Andrew Ekeke--301354233
 * Vijay Jannu--301413452
 */

import React, {useState} from 'react';
import { StyleSheet, Text, Alert, SafeAreaView, View,TextInput, TouchableOpacity, } from 'react-native';


//export default function AddPatient({navigation})
const AddPatient = ({navigation}) =>
{ const [firstName, setFirstName] = useState('AboutReact')
  
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
            <Text style={styles.logo}>Patient Clinical Information</Text>
        </View>

        <View style={styles.lightBackground}>
          <View style={styles.body}>
            <Text style={styles.label}>First Name: </Text>
            <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={(firstname) => setFirstName(firstname)}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Last Name: </Text>
            <TextInput
                style={styles.input}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>DOB: </Text>
            <TextInput
                style={styles.input}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Gender: </Text>
            <TextInput
                style={styles.input}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Age: </Text>
            <TextInput
                style={styles.input}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Telephone: </Text>
            <TextInput
                style={styles.input}/>
          </View>

          <View style={styles.body}>
            <Text style={styles.label}>Address: </Text>
            <TextInput
                style={styles.input}/>
          </View>  
        
          <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomePage', {
            paramKey: firstName,
          })}>
          <Text style={styles.buttonText}>Add Patient</Text>         
        </TouchableOpacity>
        </View>

        

        </View>
    </SafeAreaView>
  );
};

export default AddPatient;

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
    marginTop:60,
    marginBottom:20,
    marginLeft: 20,
    fontWeight: "bold",
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
