import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import axios from 'axios';

const CreatePersonalTask = ({ navigation }) => {

  const { user } = useContext(AuthContext);

  const [newTask, setNewTask] = useState({
    Title: "",
    Desc: "",
  });

  const handleChange = (name, value) => {
    setNewTask((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const createNewTask = async () => {
    if (!newTask.Title) {
      alert("Please enter task title");
      return;
    }

    try {
      await axios.post("http://192.168.1.42:3000/tasks", {
        Title: newTask.Title,
        Desc: newTask.Desc,
        AssignedTo: Number(user.id), 
        CreatedBy: Number(user.id),    
        Status: "pending"
      });

      alert("Task created");

      setNewTask({
        Title: "",
        Desc: "",
      });

      navigation.goBack(); 

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Personal Task</Text>

      <TextInput
        placeholder='Task Name'
        style={styles.input}
        value={newTask.Title}
        onChangeText={(value) => handleChange("Title", value)}
        placeholderTextColor="#94a3b8"
      />

      <TextInput
        placeholder='Description'
        style={[styles.input, styles.descInput]}
        value={newTask.Desc}
        onChangeText={(value) => handleChange("Desc", value)}
        placeholderTextColor="#94a3b8"
        multiline
      />

      <Pressable style={styles.button} onPress={createNewTask}>
        <Text style={styles.buttonText}>Create Task</Text>
      </Pressable>
    </View>
  )
}

export default CreatePersonalTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
    color: "#0f172a",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  descInput: {
    height: 80,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#0ea5e9",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
})