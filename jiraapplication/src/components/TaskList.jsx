import React from 'react'
import "../App.css"
import TaskCard from "./TaskCard"

function TaskList({tasks}) {
  return (
    <div className='tasks-list'>
      {tasks.map((task)=>{
      return <TaskCard task={task} key={task.id}/>
      })}
    </div>
  )
}

export default TaskList
