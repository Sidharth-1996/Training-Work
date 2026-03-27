import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Card from './Components/Card';
import { FlatList } from 'react-native-web';
import SectionCards from './Components/SectionCards';

export default function App() {
  const [todo, setTodo] = useState([]);

  const fetchTodo = async () => {
    const resp = await axios.get('http://localhost:3000/todos');
    const data = resp.data;
    console.log(data);
    setTodo(data);
  }

  useEffect(() => {
    fetchTodo();
  }, [])

  const groupedData=[
    {
      title:"Completed",
      data:todo.filter(item=>item.completed)
    },
    {
      title:"Pending",
      data:todo.filter(item=>!item.completed)
    }
  ];

  useEffect(() => {
    console.log("Updated Todo's are : ", todo);
  }, [todo])
  return (
    <View style={styles.container}>
      <SectionCards sections={groupedData}/>
      {/* <FlatList
        data={todo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardWrap} key={item.id}><Text style={styles.textWrap}>

            <View ><Text style={styles.cardHeaderText}>{item.todo}</Text></View>
            <View ><Text style={{ color: item.completed ? "green" : "red", fontWeight: 'bold' }}>{item.completed ? "Completed" : "Pending"}</Text></View>
            <View Style={styles.cardFooter}><Text>{item.userId}</Text></View>
          </Text></View>
        )} /> */}
      {/* <Card todo={todo}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   cardWrap:{
        border:4,
        borderWidth:4,
        borderColor:'black',
        borderStyle:"solid",
        marginVertical:4,
        marginHorizontal:4,
        backgroundColor:"plum",
        padding:4,
        height:70
    },
    textWrap:{
        textAlign:'center'

    },
    cardText:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
        padding:12,
    },
    cardHeaderText:{
        fontWeight:'bold',
        fontSize:15,
    }
});
