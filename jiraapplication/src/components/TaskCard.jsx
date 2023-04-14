import React from 'react'
import "../App.css"


const TaskCard = ({task}) => {
  return (
    <div className='task-card'>
    <h3 className='task-title'>Göreviniz</h3>
    <p>{task.title}</p>
    <h3 className='task-title'>Yapılacaklar</h3>
    <p>{task.taskDesc}</p>
    <div>
      <button className='task-delete btn'>Sil</button>
      <button className='task-edit btn'>Güncelle</button>
    </div>
    </div>
  )
}

export default TaskCard

