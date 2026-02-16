import './App.css'
import Home  from './components/Home'
import Login from './Form Handling/Login'
import Register from './Form Handling/Register'
import EffectWork from './useEffect/EffectWork'
import Post from './useEffect/Post'

function App() {
  return (
    <>
      <Home/>
      <hr/>
      <Login/>
      <hr/>
      <Register/>
      <hr/>
      <EffectWork/>
      <hr/>
      <Post/>
    </>
  )
}

export default App
