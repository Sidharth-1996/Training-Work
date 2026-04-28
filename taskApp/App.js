import React from 'react'
import { AuthProvider } from './src/Context/AuthContext'
import RootNavigator from './src/Navigagtion/RootNavigator'
import { StatusBar, View, StyleSheet } from 'react-native'

const App = () => {
  return (
    <AuthProvider>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#f1f5f9" />
        <RootNavigator/>
      </View>
    </AuthProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
})