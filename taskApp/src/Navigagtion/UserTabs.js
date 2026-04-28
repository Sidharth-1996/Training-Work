import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AssignedTasks from '../Screens/User/AssignedTasks';
import CreatedTasks from '../Screens/User/CreatedTasks';

const Tab=createBottomTabNavigator();

const UserTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1e293b',
        },
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          elevation: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 6,
        },
        tabBarActiveTintColor: '#0ea5e9',
        tabBarInactiveTintColor: '#64748b',
      }}
    >
        <Tab.Screen 
          name="Assigned" 
          component={AssignedTasks}
          options={{ title: "Assigned Tasks" }}
        />
        <Tab.Screen 
          name="Created" 
          component={CreatedTasks}
          options={{ title: "My Tasks" }}
        />
    </Tab.Navigator>
  )
}

export default UserTabs

const styles = StyleSheet.create({})