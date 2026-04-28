import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import CreatePersonalTask from './CreatePersonalTask'
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

const CreatedTasks = ({ navigation }) => {
    const [myTasks, setMyTasks] = useState([]);
    const { user } = useContext(AuthContext)

    const fetchPersonalTasks = async () => {
        const res = await axios.get(`http://192.168.1.42:3000/tasks?CreatedBy=${Number(user.id)}&AssignedTo=${Number(user.id)}`);
        setMyTasks(res.data);
    }

    useFocusEffect(
        useCallback(() => {
            if (user?.id) {
                fetchPersonalTasks();
            }
        }, [user])
    );

    const handleStatus = async (item) => {
      await axios.patch(
        `http://192.168.1.42:3000/tasks/${item.id}`,
        { Status: ( item.Status === "pending" ? "completed" : "pending") }
      );
      fetchPersonalTasks();
    }

    const {logout}=useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Pressable style={styles.addBtn} onPress={() => navigation.navigate("CreatePersonalTask")}>
                    <Text style={styles.addText}>+</Text>
                </Pressable>

                <Pressable style={styles.logoutBtn} onPress={logout}>
                    <Text style={styles.logoutText}>Logout</Text>
                </Pressable>
            </View>

            <Text style={styles.header}>My Tasks</Text>

            <FlatList
                data={myTasks}
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

export default CreatedTasks

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    padding: 16,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  addBtn: {
    backgroundColor: "#0ea5e9",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  addText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  logoutBtn: {
    backgroundColor: "#ef4444",
    paddingHorizontal: 12,
    justifyContent: "center",
    borderRadius: 6,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "600",
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
    backgroundColor: "#fff",
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
    color: "#fff",
    fontWeight: "600",
  },
  pending: {
    backgroundColor: "#facc15",
  },
  done: {
    backgroundColor: "#22c55e",
  },
})