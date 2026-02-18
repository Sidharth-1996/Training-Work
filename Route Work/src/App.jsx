import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Services from './Components/Services'
import Header from './Components/Header'
import Mission from './Components/about/Mission'
import Vision from './Components/about/Vision'
import Culture from './Components/about/Culture'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}>
        {/*nested Routing*/}
        <Route path='mission' element={<Mission/>}/>
        <Route path='vision' element={<Vision/>}/>
        <Route path='culture' element={<Culture/>}/>
      </Route>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    </BrowserRouter>    
    </>
  )
}

export default App
