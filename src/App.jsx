import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import './index.css'

function App() {
  return (
    <>
    <div className="container mt-3">
      <h1> Learn about Redux Toolkit </h1>
      <AddTodo/>
      <Todos/>
    </div>
    </>
  )
}


export default App
