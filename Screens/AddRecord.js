/**
 * MAPD712 - group 3- milestone2
 * Adegbesan Adewale--301148489
 * Emeka Andrew Ekeke--301354233
 * Vijay Jannu--301413452
 */

// Import necessary libraries
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const TestForm = () => {
  // State variables to store form data
  const [date, setDate] = useState('');
  const [nurseName, setNurseName] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [systolic, setSystolic] = useState('');

  // Function to handle form submission
  const submitForm = async () => {
    try {
      // Make a POST request to the API
      const response = await axios.post(
        'http://127.0.0.1:8000/patients/6556a5493d6ca7b3f816ac9e/tests', // Replace with your API endpoint
        {
          date,
          nurse_name: nurseName,
          type,
          category,
          diastolic,
          systolic,
        }
      );

      // Handle the response
      console.log('Test added:', response.data);
      Alert.alert('Success', 'Test added successfully');
    } catch (error) {
      // Handle errors
      console.error('Error adding test:', error);
      Alert.alert('Error', 'Failed to add test');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.darkBackground}>
           <Text style={styles.logo}>Add Patient Record</Text>
        </View>
    <View>
      <Text style = {{ fontSize: 14,width: 88,margin: 5, paddingBottom: 6, paddingTop: 9, textAlign: 'center',backgroundColor: '#5B9F8F', borderRadius: 10}}>Date:</Text>
      <TextInput style = {{ height: 30, width: 220, margin: 10, backgroundColor: 'white',fontSize: 12,padding: 10,borderRadius: 10,}} 
      value={date} onChangeText={setDate} />

      <Text style={{ fontSize: 14,width: 88,margin: 5, paddingBottom: 6, paddingTop: 9, textAlign: 'center',backgroundColor: '#5B9F8F', borderRadius: 10}}>Nurse Name:</Text>
      <TextInput style = {{ height: 30, width: 220, margin: 10, backgroundColor: 'white',fontSize: 12,padding: 10,borderRadius: 10,}}
      value={nurseName} onChangeText={setNurseName} />

      <Text style={{ fontSize: 14,width: 88,margin: 5, paddingBottom: 6, paddingTop: 9, textAlign: 'center',backgroundColor: '#5B9F8F', borderRadius: 10}}>Type:</Text>
      <TextInput style = {{ height: 30, width: 220, margin: 10, backgroundColor: 'white',fontSize: 12,padding: 10,borderRadius: 10,}}
      value={type} onChangeText={setType} />

      <Text style={{ fontSize: 14,width: 88,margin: 5, paddingBottom: 6, paddingTop: 9, textAlign: 'center',backgroundColor: '#5B9F8F', borderRadius: 10}}>Category:</Text>
      <TextInput style = {{ height: 30, width: 220, margin: 10, backgroundColor: 'white',fontSize: 12,padding: 10,borderRadius: 10,}}
      value={category} onChangeText={setCategory} />

      <Text style={{ fontSize: 14,width: 88,margin: 5, paddingBottom: 6, paddingTop: 9, textAlign: 'center',backgroundColor: '#5B9F8F', borderRadius: 10}}>Diastolic:</Text>
      <TextInput style = {{ height: 30, width: 220, margin: 10, backgroundColor: 'white',fontSize: 12,padding: 10,borderRadius: 10,}}
      value={diastolic} onChangeText={setDiastolic} />

      <Text style={{ fontSize: 14,width: 88,margin: 5, paddingBottom: 6, paddingTop: 9, textAlign: 'center',backgroundColor: '#5B9F8F', borderRadius: 10}}>Systolic:</Text>
      <TextInput style = {{ height: 30, width: 220, margin: 10, backgroundColor: 'white',fontSize: 12,padding: 10,borderRadius: 10,}}
      value={systolic} onChangeText={setSystolic} />

      <Button title="Submit" onPress={submitForm} />
    </View>

    </SafeAreaView>
  );
};

export default TestForm;

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



// import React from 'react';
// import { StyleSheet, Text, Alert, SafeAreaView, View,TextInput, TouchableOpacity, } from 'react-native';


// export default function AddRecord({navigation})
// {

//   const btnPressed= () =>
//   Alert.alert(
//     "Success",
//     "Record Added Successfully",
//     [
//       {
//         text: "Cancel",
//         onPress: () => console.log("Cancel Pressed"),
//         style: "cancel"
//       },
//       { text: "OK", onPress: () => console.log("OK Pressed") }
//     ]
//   );
//   return (
//     <SafeAreaView style={styles.container}>
//         <View style={styles.darkBackground}>
//             <Text style={styles.title}>Patient Record</Text>
//         </View>

//         <View style={styles.lightBackground}>
//           <View style={styles.body}>
//             <Text style={styles.label}>Height: </Text>
//             <TextInput
//                 style={styles.input}/>
//           </View>

//           <View style={styles.body}>
//             <Text style={styles.label}>Weight: </Text>
//             <TextInput
//                 style={styles.input}/>
//           </View>

//           <View style={styles.body}>
//             <Text style={styles.label}>Blood Group: </Text>
//             <TextInput
//                 style={styles.input}/>
//           </View>

//           <View style={styles.body}>
//             <Text style={styles.label}>Blood pressure: </Text>
//             <TextInput
//                 style={styles.input}/>
//           </View>

//           <View style={styles.body}>
//             <Text style={styles.label}>Respiratory Rate: </Text>
//             <TextInput
//                 style={styles.input}/>
//           </View>

//           <View style={styles.body}>
//             <Text style={styles.label}>Blood oxygen Level: </Text>
//             <TextInput
//                 style={styles.input}/>
//           </View>

//           <View style={styles.body}>
//             <Text style={styles.label}>Heart Beat Rate: </Text>
//             <TextInput
//                 style={styles.input}/>
//           </View>  
        
//           <View style={styles.button}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('ViewPatient')}>
//           <Text style={styles.buttonText}>Add Record</Text>         
//         </TouchableOpacity>
//         </View>

//         </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E6E6E6',
//   },
//   scrollView: {
//     marginHorizontal: 10,
//   },
//   body: {
//     marginTop: 10,
//     flexDirection: 'row',
//   },
//   title: {  
//     fontSize: 32,
//     color: 'black',
//     marginTop:60,
//     marginBottom:20,
//     marginLeft: 20,
//     fontWeight: "bold",
//   },
//   label: {
//     fontSize: 20,
//     width: 90,
//     margin: 12,
//   },
//   input: {
//     height: 40,
//     width: 220,
//     margin: 10,
//     backgroundColor: 'white',
//     fontSize: 18,
//     padding: 10,
//     borderRadius: 10,
//   },
//   darkBackground: {
//     backgroundColor: '#5B9F8F',
//   },
//   lightBackground: {
//     backgroundColor: '#5B9F8F',
//     alignItems: 'center',
//     borderRadius: 20,
//     margin: 20,
//     padding: 10,
//   },
//   button: {
//     backgroundColor: '#0A5341',
//     width: 220,
//     height: 40,
//     marginTop: 20,
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     textAlign: 'center',
//     padding: 9,
//   },
// });
