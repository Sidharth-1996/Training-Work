import './App.css'
import Welcome from './components/Module 1/Welcome'
import CondWelcome from './components/Module 1/ConditionalWelcome'
import SimpleComponent from './components/Module 1/SimpleComponent'
import DynamicGreetings from './components/Module 1/DynamicGreetings'
import StyleComponent from './components/Module 1/StyleComponent'
import ToggleList from './components/Module 1/ToogleList'
import ArrayList from './components/Module 1/ArrayList'
import ParentChild from './components/Module 2/ParentChild'
import DeleteUser from './components/Module 2/DeleteUser'
import ObjectProp from './components/Module 2/ObjectProp'
import AlertParent from './components/Module 2/AlertParent'

function App() {

  return (
    <>
      <Welcome/>
      <CondWelcome/>
      <SimpleComponent/>
      <DynamicGreetings/>
      <StyleComponent/>
      <ToggleList/>
      <ArrayList/>
      <ParentChild/>
      <DeleteUser/>
      <ObjectProp/>
      <AlertParent/>
    </>
  )
}

export default App
