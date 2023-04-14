import React from 'react'


const TaskCard = ({tasks}) => {
  return (
    <div>
    <h3>Görevimiz</h3>
    <p>{tasks.title}</p>
    <h3>Yapılacaklar</h3>
    <p>{tasks.taskDesc}</p>
    </div>
  )
}

export default TaskCard

