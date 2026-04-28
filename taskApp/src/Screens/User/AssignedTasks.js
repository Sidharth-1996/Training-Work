import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';

const AssignedTasks = () => {
  const [myAssignedTasks, setMyAssignedTasks] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchMyAssignedTasks = async () => {
    const res = await axios.get(`http://192.168.1.42:3000/tasks?AssignedTo=${user.id}`);
    const filteredTasks = res.data.filter((task) => task.CreatedBy !== Number(user.id));
    setMyAssignedTasks(filteredTasks);
  }

  const handleStatus = async (item) => {
    await axios.patch(
      `http://192.168.1.42:3000/tasks/${item.id}`,
      { Status: (item.Status === "pending" ? "completed" : "pending") }
    );
    fetchMyAssignedTasks();
  }

  useEffect(() => {
    fetchMyAssignedTasks();
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Assigned Tasks</Text>

      <FlatList
        data={myAssignedTasks}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.Title}</Text>
            <Text style={styles.desc}>{item.Desc}</Text>

            <Pressable
              style={[
                styles.statusBtn,
                item.Status === "completed" ? styles.done : styles.pending
              ]}
              onPress={() => handleStatus(item)}
            >
              <Text style={styles.statusText}>{item.Status}</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  )
}

export default AssignedTasks

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
    color: "#0f172a",
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
    marginBottom: 8,
  },
  statusBtn: {
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
  },
  statusText: {
    fontWeight: "600",
    color: "#fff",
  },
  pending: {
    backgroundColor: "#facc15",
  },
  done: {
    backgroundColor: "#22c55e",
  },
})