import React from 'react'
import "../App.css"
import TaskShow from './TaskShow'

function TaskList({tasks}) {
  return (
    <div>
      {tasks.map((task)=>{
       <TaskShow task={task} key={task.id}/>
      })}
    </div>
  )
}

export default TaskList
