import React, { useState } from "react";
import "../App.css";


function TaskCreate({setTasks, tasks}) {
  const [title, setTitle] = useState('')
  const [taskDesc, setTaskDesc] = useState('')
 
  
  const handleChange =(event)=> {
   setTitle (event.target.value)
  }

  const handleTaskChange = (event)=>{
    setTaskDesc(event.target.value)
  }

  const handleSubmit= (e)=>{
    e.preventDefault();
    setTasks([...tasks, {
      id : Math.floor(Math.random()* 99999), 
      title,
      taskDesc,
    } ])
    setTitle('')
    setTaskDesc('')

  }

  return (
    <div className="task-create">
      <h3>Lütfen Task Ekleyiniz!</h3>
      <form className="task-form">
        <label className="task-label">Başlık</label>
        <input className="task-input" value={title} onChange={handleChange} />
        <label className="task-label">Task Giriniz</label>
        <textarea
          rows={5}
          className="task-input"
          value={taskDesc}
          onChange={handleTaskChange}
        
        ></textarea>
        <button className="task-button" onClick={handleSubmit}>Oluştur</button>
      </form>
    </div>
  );
}

export default TaskCreate;
