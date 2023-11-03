/**
 * MAPD712 - group 3- milestone2
 * Adegbesan Adewale--301148489
 * Emeka Andrew Ekeke--301354233
 * Vijay Jannu--301413452

 */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomePage ({navigation})
{ 
    return (
      <View style={styles.container}>
        <View style={styles.darkBackground}>
          <Text  style={styles.title}>Welcome!</Text>
          <Text>firstname: </Text>
        </View>

        <View style={styles.lightBackground}>

        <View style={styles.button}>
          <TouchableOpacity
          onPress={() => navigation.navigate('AddPatient')}> 
            <Text style={styles.buttonText}>Add Patient</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.button}>
          <TouchableOpacity
          onPress={() => navigation.navigate('ViewPatient')}> 
            <Text style={styles.buttonText}>View Patient</Text>
          </TouchableOpacity> 
        </View>

        <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewAllPatients')}> 
            <Text style={styles.buttonText}>List All Patients</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.button}>
          <TouchableOpacity
          onPress={() => navigation.navigate('AddRecord')}> 
            <Text style={styles.buttonText}>Add Patient Record</Text>
          </TouchableOpacity>                    
        </View>

        <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewRecord')}> 
            <Text style={styles.buttonText}>View Patient Record</Text>
          </TouchableOpacity>
          </View>

        <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewAllRecords')}> 
            <Text style={styles.buttonText}>View All Patient Records</Text>
          </TouchableOpacity>        
        </View>
        
        <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CriticalPatients')}> 
            <Text style={styles.buttonText}>Critical Condition Patients</Text>
          </TouchableOpacity>          
        </View>
        </View>
      </View>
    );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    color: 'white',
    marginTop:60,
    marginBottom:20,
    marginLeft: 20,
    fontWeight: "bold",
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 9,
  },
  button: {
    backgroundColor: '#2645B1',
    width: 220,
    height: 40,
    marginTop: 20,
    borderRadius: 10,
  },
  darkBackground: {
    backgroundColor: '#2645B1',
  },
  lightBackground: {
    backgroundColor: '#D8E0FF',
    alignItems: 'center',
    borderRadius: 20,
    margin: 30,
    paddingTop: 10,
    paddingBottom: 30,
  },
});
