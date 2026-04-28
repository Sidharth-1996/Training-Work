import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AdminHome from '../Screens/Admin/AdminHome';
import CreateTask from '../Screens/Admin/CreateTask';

const Stack=createNativeStackNavigator();
const AdminStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1e293b',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: '600',
        },
        contentStyle: {
          backgroundColor: '#f1f5f9',
        },
      }}
    >
        <Stack.Screen 
          name="AdminHome" 
          component={AdminHome}
          options={{ title: "Dashboard" }}
        />
        <Stack.Screen 
          name="CreateTask" 
          component={CreateTask}
          options={{ title: "Create Task" }}
        />
    </Stack.Navigator>
  )
}

export default AdminStack

const styles = StyleSheet.create({})