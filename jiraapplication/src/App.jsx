import { useState } from 'react'

import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'


function App() {
 const [tasks, setTasks] = useState([]);



  return (
    <div className="App">
     <TaskCreate  tasks={tasks}  setTasks={setTasks}/>
     <h1>Görevler</h1>
     <TaskList tasks= {tasks} setTasks={setTasks}/>
   
     
    </div>
  )
}

export default App
