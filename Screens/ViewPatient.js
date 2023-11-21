/**
 * MAPD712 - group 3- milestone2
 * Adegbesan Adewale--301148489
 * Emeka Andrew Ekeke--301354233
 * Vijay Jannu--301413452
 */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const PatientDetails = ({ route }) => {
  const { id } = route.params;
  const [patient, setPatient] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/patients/${id}`);
        setPatient(response.data);
      } catch (err) {
        setError(err.response ? err.response.data : 'An error occurred');
      }
    };

    fetchPatient();
  }, [id]);

  return (
    <View style={styles.container}>
      {patient ? (
        <View>
          <Text>Patient Name: {patient.name}</Text>
          {/* Add more details as needed */}
        </View>
      ) : (
        <Text>{error ? error : 'Loading...'}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PatientDetails;


//   return (
//     <View style={styles.container}>
      
//       <View>
//         <Text style={styles.label}>Enter patient email</Text>
//         <TextInput
//           style={styles.input}/> 
//       </View>
//       <View>
//       <TouchableOpacity
//          onPress={() => navigation.navigate('PatientData')}> 
//            <Text style={styles.buttonText}>View Patient</Text>
//          </TouchableOpacity> 
//       </View>

// </View> // main view close
//   );





// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#5B9F8F',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   body: {
//    marginTop: 80,
//   },
//   label: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 20,
//     margin: 12,
//   },
//   input: {
//     backgroundColor:'white',
//     height: 40,
//     width: 250,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
//   button: {
//    backgroundColor: '#2645B1',
//    width: 220,
//    height: 40,
//    marginTop: 20,
//    borderRadius: 10,
//  },
//  buttonText: {
//    color: 'white',
//    fontSize: 16,
//    textAlign: 'center',
//    padding: 9,
//  },
// });



