import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../Screens/LoginScreen';

const Stack=createNativeStackNavigator();
const AuthStack = () => {
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
          name="login" 
          component={LoginScreen}
          options={{ title: "Welcome" }}
        />   
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})