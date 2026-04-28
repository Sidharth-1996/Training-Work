import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import LoginScreen from '../Screens/LoginScreen';
import AdminStack from './AdminStack';
import UserStack from './UserStack';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f1f5f9',
    primary: '#1e293b',
    card: '#ffffff',
    text: '#0f172a',
    border: '#e2e8f0',
  },
};

const RootNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer theme={MyTheme}>
      {
        !user ? (
          <LoginScreen />
        ) : user.role === "admin" ? (
          <AdminStack />
        ) : (
          <UserStack />
        )
      }
    </NavigationContainer>
  )
}

export default RootNavigator