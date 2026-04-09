import { createContext, StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'

export const TodoContext = createContext();

const Todo = () => {

  const [todo, setTodo] = useState([]);
  const[newTodo,setNewTodo]=useState({
    taskname:"",
    status:false
  });

  const fetchTodo = async () => {
    let resp = await axios.get("http://localhost:3000/todos")
    resp = resp.data;
    console.log(resp);
    setTodo(resp);
  }

  useEffect(() => {
    fetchTodo();
  }, [])

  const addTodo=async()=>{
    await axios.post("http://localhost:3000/todos",newTodo)
    fetchTodo()
    setNewTodo({
      taskname:"",
      status:false
    })
  }

  const editTodo=async(id,status)=>{
    await axios.patch(`http://localhost:3000/todos/${id}`,{status:!status})
    fetchTodo();
  }

  const deleteTodo=async(id)=>{
    await axios.delete(`http://localhost:3000/todos/${id}`)
    fetchTodo();
  }

  return (
    <TodoContext.Provider value={{todo,newTodo,setNewTodo,addTodo,editTodo,deleteTodo}}>
      <StrictMode>
        <App />
      </StrictMode>
    </TodoContext.Provider>

  )
}
createRoot(document.getElementById('root')).render(
  <Todo/>
)
