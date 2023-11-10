/**
  * MAPD712 - group 3- milestone2
 * Adegbesan Adewale--301148489
 * Emeka Andrew Ekeke--301354233
 * Vijay Jannu--301413452
 */

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text,ScrollView, SafeAreaView, StatusBar, View,TextInput,TouchableOpacity} from 'react-native';


export default function ViewAllPatients()
{
  const [patients, setPatients] = useState([])

  useEffect(() =>{
    fetch("http://127.0.0.1:8000/patients")
    .then(response => response.json())
    .then(data => setPatients(data))
    .catch(error => console.error('Error fetching data:', error));
    }, [])


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {patients.map((patient, index) => (
         <View style={styles.darkBackground} key = {index}>
          <View style={styles.body}>
            <Text> {patient.name} </Text>
            <Text> {patient.Contact} </Text>
            <Text> {patient.Allergies} </Text>
            <Text> {patient.Roomnumber} </Text>
            <Text> {patient.Dob} </Text>
            <Text> {patient.medcondition} </Text>
         </View>

         </View>
      ))}
      </ScrollView>
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
     marginTop:60,
     marginBottom:20,
     marginLeft: 20,
     fontWeight: "bold",
     textAlign: 'center',
   },
   labels: {
     fontSize: 20,
     width: 88,
     margin: 10,
     color: 'white',
     borderRadius: 10,
     backgroundColor: '#0A5341',
     textAlign: 'center',
    },
   label: {
    fontSize: 14,
    width: 88,
    margin: 10,
    paddingBottom: 9,
    paddingTop: 9,
    textAlign: 'center',
    backgroundColor: '#5B9F8F',
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
 