/**
  * MAPD712 - group 3- milestone2
 * Adegbesan Adewale--301148489
 * Emeka Andrew Ekeke--301354233
 * Vijay Jannu--301413452
 */

import React from 'react';
import { StyleSheet, Text,ScrollView, SafeAreaView, StatusBar, View,TextInput,TouchableOpacity} from 'react-native';


export default function ViewAllPatients({navigation})
{
  return (
    <SafeAreaView style={styles.container}>
         <View style={styles.darkBackground}>
             <Text style={styles.logo}>Patient Clinical List</Text>
         </View>
 
         <View style={styles.lightBackground}>
           <View style={styles.body}>
             <Text style={styles.labels}>Patient ID </Text>
             <Text style={styles.labels}>Patient Name </Text>
             <Text style={styles.labels}>Patient DOB</Text>
             <Text style={styles.labels}>Contact Number</Text>
           </View>
           <View style={styles.body}>
             <Text style={styles.label}>000344234 </Text>
             <Text style={styles.label}>Larry</Text>
             <Text style={styles.label}>10/24/1990</Text>
             <Text style={styles.label}>3455353433</Text>
           </View>
           <View style={styles.body}>
             <Text style={styles.label}>000383939 </Text>
             <Text style={styles.label}>John </Text>
             <Text style={styles.label}>09/20/1982</Text>
             <Text style={styles.label}>3652545724</Text>
           </View>
           <View style={styles.body}>
             <Text style={styles.label}>535353524 </Text>
             <Text style={styles.label}>Hamilton </Text>
             <Text style={styles.label}>03/08/1997</Text>
             <Text style={styles.label}>5765767577</Text>
           </View>
           <View style={styles.body}>
             <Text style={styles.label}>245454534 </Text>
             <Text style={styles.label}>Marquese </Text>
             <Text style={styles.label}>07/23/1978</Text>
             <Text style={styles.label}>2535646788</Text>
           </View>
           <View style={styles.body}>
             <Text style={styles.label}>356465456 </Text>
             <Text style={styles.label}>Sam </Text>
             <Text style={styles.label}>03/28/1986</Text>
             <Text style={styles.label}>3646576575</Text>
           </View>
           <View style={styles.body}>
             <Text style={styles.label}>654363545 </Text>
             <Text style={styles.label}>Max </Text>
             <Text style={styles.label}>1978</Text>
             <Text style={styles.label}>5675647657</Text>
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
     backgroundColor: '#fff',
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
     color: 'white',
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
     backgroundColor: '#2645B1',
     textAlign: 'center',
    },
   label: {
    fontSize: 14,
    width: 88,
    margin: 10,
    paddingBottom: 9,
    paddingTop: 9,
    textAlign: 'center',
    backgroundColor: '#D8E0FF',
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
     alignItems: 'center',
     borderRadius: 20,
     margin: 30,
     padding: 20,
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
 