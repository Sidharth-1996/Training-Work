import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { Pressable, TextInput } from 'react-native';

import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';

const LoginScreen = () => {
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const {setUser}=useContext(AuthContext);

  const login=async()=>{
    try{
        const res=await axios.get(`http://192.168.1.42:3000/users?email=${email}?password=${password}`);
        console.log(res);
        console.log("email:",`${email}`,"pass:",`${password}`);
        

        if(res.data.length>0){
            setUser(res.data[0])
        }
        else{
            alert("Invalid credentials");    
        }
    }
    catch(error){
        console.log(error);
        alert("Error connecting to server");
    }
  }

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome Back</Text>

        <View style={styles.card}>
          <TextInput
              placeholder='Email'
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholderTextColor="#94a3b8"
          />

          <TextInput
              placeholder='Password'
              style={styles.input}
              secureTextEntry
              onChangeText={setPassword}
              value={password}
              placeholderTextColor="#94a3b8"
          />

          <Pressable style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
    </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
    color: "#0f172a",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    elevation: 3,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  button: {
    backgroundColor: "#0ea5e9",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
})