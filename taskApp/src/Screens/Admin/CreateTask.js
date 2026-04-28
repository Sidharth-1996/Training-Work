import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import axios from 'axios';

const CreateTask = ({navigation}) => {

  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get("http://192.168.1.42:3000/users");
    setUsers(res.data);
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  const handleSelect = (item) => {
    setSelectedUser(item);
    setIsOpen(false);
  }

  const handleChange = (name, value) => {
    setNewTask((prev) => ({
      ...prev,
      [name]: value
    })
    )
  }
  const [newTask, setNewTask] = useState({
    Title: "",
    Desc: "",
    Status: "",
    CreatedBy: "",
    AssignedTo: "",
  })

  const createNewTask = async () => {
    if (!newTask.Title || !selectedUser) {
      alert("Fill all fields")
      return;
    }

    await axios.post("http://192.168.1.42:3000/tasks", {
      Title: newTask.Title,
      Desc: newTask.Desc,
      AssignedTo: Number(selectedUser.id),
      CreatedBy: Number(user.id),
      Status: "pending"
    })
    alert("Task created")
    setNewTask({
      Title: "",
      Desc: "",
      Status: "",
      CreatedBy: "",
      AssignedTo: "",
    })
    setSelectedUser(null)
    navigation.navigate("AdminHome")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Task</Text>

      <TextInput
        placeholder='Task Name'
        style={styles.input}
        value={newTask.Title}
        name="Title"
        onChangeText={(value) => handleChange("Title", value)}
        placeholderTextColor="#94a3b8"
      />

      <TextInput
        placeholder='Description'
        style={[styles.input, styles.descInput]}
        value={newTask.Desc}
        name="Desc"
        onChangeText={(value) => handleChange("Desc", value)}
        placeholderTextColor="#94a3b8"
        multiline
      />

      <Pressable style={styles.dropdown} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.dropdownText}>
          {selectedUser ? selectedUser.email : "Select User"}
        </Text>
      </Pressable>

      {isOpen && (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          style={styles.dropdownList}
          renderItem={({ item }) => (
            <Pressable
              style={styles.dropdownItem}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.itemText}>{item.email}</Text>
            </Pressable>
          )}
        />
      )}

      <Pressable style={styles.button} onPress={createNewTask}>
        <Text style={styles.buttonText}>Create Task</Text>
      </Pressable>
    </View>
  )
}

export default CreateTask

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
  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    marginBottom: 6,
  },
  dropdownText: {
    color: "#0f172a",
  },
  dropdownList: {
    maxHeight: 150,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  itemText: {
    color: "#0f172a",
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