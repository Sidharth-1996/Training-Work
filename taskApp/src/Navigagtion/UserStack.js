import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserTabs from './UserTabs';
import CreatePersonalTask from '../Screens/User/CreatePersonalTask';

const Stack=createNativeStackNavigator();

const UserStack = () => {
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
          name="UserTabs"
          component={UserTabs}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="CreatePersonalTask"
          component={CreatePersonalTask}
          options={{ title: "Create Task" }}
        />
    </Stack.Navigator>
  )
}

export default UserStack

const styles = StyleSheet.create({})