/**
 * MAPD712 - group 3- milestone2
 * Adegbesan Adewale--301148489
 * Emeka Andrew Ekeke--301354233
 * Vijay Jannu--301413452
 */

import 'react-native-gesture-handler';
import * as React from 'react';     //import all from react not React from react
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './Screens/HomePage';
import LoginPage from './Screens/LoginPage';
import SignUp from './Screens/SignUp';
import AddPatient from './Screens/AddPatient';
import AddRecord from './Screens/AddRecord';
import ViewPatient from './Screens/ViewPatient';
import ViewRecord from './Screens/ViewRecord';
import ViewAllPatients from './Screens/ViewAllPatients';
import ViewAllRecords from './Screens/ViewAllRecords';
import CriticalPatients from './Screens/CriticalPatients';
import PatientData from './Screens/PatientData';
import RecordData from './Screens/RecordData';


const MyStack = createNativeStackNavigator();

function App()
{
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen name="LoginPage" component={LoginPage} options={{
          title: 'Login Page'
        }}/>
        <MyStack.Screen name="HomePage" component={HomePage} options={{
          headerShown: false
        }}/>
        <MyStack.Screen name="SignUp" component={SignUp} options={{
          headerShown: false
        }}/>
        <MyStack.Screen name="AddPatient" component={AddPatient}/>
        <MyStack.Screen name="AddRecord" component={AddRecord} />
        <MyStack.Screen name="ViewPatient" component={ViewPatient}/>
        <MyStack.Screen name="ViewRecord" component={ViewRecord}/>
        <MyStack.Screen name="ViewAllPatients" component={ViewAllPatients}/>
        <MyStack.Screen name="ViewAllRecords" component={ViewAllRecords}/>
        <MyStack.Screen name="CriticalPatients" component={CriticalPatients}/>
        <MyStack.Screen name="PatientData" component={PatientData}/>
        <MyStack.Screen name="RecordData" component={RecordData}/>
      </MyStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
