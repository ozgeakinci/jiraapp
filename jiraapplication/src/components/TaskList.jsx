import React from 'react'
import "../App.css"
import TaskCard from "./TaskCard"

function TaskList({tasks, setTasks}) {
  return (
    <div className='tasks-list'>
      {tasks.map((task , index)=>{
        console.log(task)
      return <TaskCard task={task} key={index} setTasks={setTasks}/>
      })}
    </div>
  )
}

export default TaskList
