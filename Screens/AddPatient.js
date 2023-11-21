/**
 * MAPD712 - group 3- milestone2
 * Adegbesan Adewale--301148489
 * Emeka Andrew Ekeke--301354233
 * Vijay Jannu--301413452
 */

import React, {useState} from 'react';
import { StyleSheet, Text, Alert, SafeAreaView, View,TextInput, TouchableOpacity, } from 'react-native';
import axios from 'axios';

//export default function AddPatient({navigation})
const PatientForm = () =>
{ const [formData, setFormData] = useState({
    name: '',
    Contact: '',
    Allergies: '',
    Roomnumber: '',
    DOb: '',
    medcondition: '',

});
  //Function that handles Submission
  const handleSubmit = async () => {
    try {
      // Make a POST request to the server endpoint
      const response = await axios.post('http://127.0.0.1:8000/patients', formData);
      console.log('Response from server:', response.data);
      // Handle success, update UI or navigate to another screen

    }
    catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, display an error message
    }
  };


  return (
<SafeAreaView style={styles.container}>
<View style={styles.darkBackground}>
   <Text style={styles.logo}>Patient Clinical Information</Text>
        </View>

    <View > 
      <Text style = {{ fontSize: 14,width: 88,margin: 5, paddingBottom: 6, paddingTop: 9, textAlign: 'center',backgroundColor: '#5B9F8F', borderRadius: 10}} >Name:</Text>
      <TextInput style = {{ height: 30, width: 220, margin: 10, backgroundColor: 'white',fontSize: 12,padding: 10,borderRadius: 10,}}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
        value={formData.name}
      />

      <Text style = {{ fontSize: 14, width: 88,margin: 5, paddingBottom: 9, paddingTop: 9, textAlign: 'center', backgroundColor: '#5B9F8F', borderRadius: 10}}>Contact:</Text>
      <TextInput  style = {{ height: 30, width: 220, margin: 10, backgroundColor: 'white',fontSize: 12,padding: 10,borderRadius: 10,}}
        onChangeText={(text) => setFormData({ ...formData, Contact: text })}
        value={formData.Contact}
      />

      <Text style =  {{ fontSize: 14,width: 88,margin: 5, paddingBottom: 9, paddingTop: 9, textAlign: 'center',backgroundColor: '#5B9F8F', borderRadius: 10}}>Allergies:</Text>
      <TextInput style = {{ height: 30, width: 220, margin: 10, backgroundColor: 'white',fontSize: 12,padding: 10,borderRadius: 10,}}
        onChangeText={(text) => setFormData({ ...formData, Allergies: text })}
        value={formData.Allergies}
      />

      <Text  style =  {{ fontSize: 14,width: 88,margin: 5, paddingBottom: 9, paddingTop: 9, textAlign: 'center',backgroundColor: '#5B9F8F', borderRadius: 10}}>Room Number:</Text>
      <TextInput style = {{ height: 30, width: 220, margin: 10, backgroundColor: 'white',fontSize: 12,padding: 10,borderRadius: 10,}}
        onChangeText={(text) => setFormData({ ...formData, Roomnumber: text })}
        value={formData.Roomnumber}
      />

      <Text  style =  {{ fontSize: 14,width: 88,margin: 5, paddingBottom: 9, paddingTop: 9, textAlign: 'center',backgroundColor: '#5B9F8F', borderRadius: 10}}>Date of Birth:</Text>
      <TextInput style = {{ height: 30, width: 220, margin: 10, backgroundColor: 'white',fontSize: 12,padding: 10,borderRadius: 10,}}
        onChangeText={(text) => setFormData({ ...formData, DOb: text })}
        value={formData.DOb}
      />

      <Text style =  {{ fontSize: 14,width: 88,margin: 5, paddingBottom: 9, paddingTop: 9, textAlign: 'center',backgroundColor: '#5B9F8F', borderRadius: 10}}>Medical Condition:</Text>
      <TextInput style = {{ height: 30, width: 220, margin: 10, backgroundColor: 'white',fontSize: 12,padding: 10,borderRadius: 10,}}
        onChangeText={(text) => setFormData({ ...formData, medcondition: text })}
        value={formData.medcondition}
      />

      <TouchableOpacity onPress={handleSubmit}>
        <View style={{ backgroundColor: '#0A5341', width:220, height:40, padding: 10, borderRadius:12, marginTop: 20, alignItems:'center' }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Add Patient</Text>
        </View>
      </TouchableOpacity>

    </View>

    </SafeAreaView>
  );
};

export default PatientForm;

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
