import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import axios from 'axios';
import { FlatList } from 'react-native';

const AdminHome = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const [allTasks, setAllTasks] = useState([]);

  const[users,setUsers]=useState([]);
  const fetchAllTasks = async () => {
    const res = await axios.get("http://192.168.1.42:3000/tasks");
    setAllTasks(res.data);
  }

  const handleDelete = async (item) => {
    await axios.delete("http://192.168.1.42:3000/tasks/" + item.id);
    fetchAllTasks();
  }

  const fetchUsers=async()=>{
    const res=await axios.get("http://192.168.1.42:3000/users")
    setUsers(res.data);
  }

  useEffect(() => {
    fetchUsers();
    fetchAllTasks();
    
  }, [])

  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Admin Dashboard</Text>

      <View style={styles.topActions}>
        <Pressable style={styles.primaryBtn} onPress={() => navigation.navigate("CreateTask")}>
          <Text style={styles.primaryText}>Create Task</Text>
        </Pressable>

        <Pressable style={styles.logoutBtn} onPress={logout}>
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>Assigned Tasks</Text>

      <FlatList
        data={allTasks}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => 
        { 
          const assignedUser=users.find((u)=>Number(u.id)===Number(item.AssignedTo));       
          return(
          <View style={styles.card}>
            <Text style={styles.title}>{item.Title}</Text>
            <Text style={styles.desc}>{item.Desc}</Text>

            <View style={styles.row}>
              <Text style={styles.label}>Assigned:</Text>
              <Text style={styles.value}>
                {assignedUser?.email || "Unknown"}
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Status:</Text>
              <Text style={[
                styles.status,
                item.Status === "completed" ? styles.done : styles.pending
              ]}>
                {item.Status}
              </Text>
            </View>

            <Pressable
              style={styles.deleteBtn}
              onPress={() => handleDelete(item)}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </Pressable>
          </View>
        
        )}}
        />
    </View>
  )
}

export default AdminHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 12,
    color: "#0f172a",
  },
  topActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  primaryBtn: {
    backgroundColor: "#0ea5e9",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  primaryText: {
    color: "#fff",
    fontWeight: "600",
  },
  logoutBtn: {
    backgroundColor: "#ef4444",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
    color: "#334155",
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#0f172a",
  },
  desc: {
    fontSize: 13,
    color: "#64748b",
    marginBottom: 6,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: "#475569",
    marginRight: 4,
  },
  value: {
    fontSize: 12,
    color: "#0f172a",
  },
  status: {
    fontSize: 12,
    fontWeight: "600",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  pending: {
    backgroundColor: "#facc15",
    color: "#000",
  },
  done: {
    backgroundColor: "#22c55e",
    color: "#fff",
  },
  deleteBtn: {
    marginTop: 8,
    backgroundColor: "#ef4444",
    paddingVertical: 6,
    borderRadius: 5,
    alignItems: "center",
  },
  deleteText: {
    color: "#fff",
    fontWeight: "500",
  },
})