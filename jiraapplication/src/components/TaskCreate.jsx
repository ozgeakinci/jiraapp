import React, { useState } from "react";
import "../App.css";

function TaskCreate({ setTasks, tasks, task, taskUpdate, onTaskUpdate}) {
  const [title, setTitle] = useState(task ? task.title : '');
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(taskUpdate){
      const updatedTask = {
        id: task.id, title, taskDesc
      }
      onTaskUpdate(updatedTask)
    } else { setTasks([
      ...tasks,
      {
        id: Math.floor(Math.random() * 99999),
        title,
        taskDesc,
      },
    ]);
    setTitle("");
    setTaskDesc("");
  };}
   

  return (
    <div>
      {taskUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyeniz</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz!</label>
            <input
              className="task-input"
              value={title}
              onChange={handleChange}
            />
            <label className="task-label">Taskı Düzenleyiniz!</label>
            <textarea
              rows={5}
              className="task-input"
              value={taskDesc}
              onChange={handleTaskChange}
            ></textarea>
            <button className="task-button task-button-update" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              className="task-input"
              value={title}
              onChange={handleChange}
            />
            <label className="task-label">Task Giriniz</label>
            <textarea
              rows={5}
              className="task-input"
              value={taskDesc}
              onChange={handleTaskChange}
            ></textarea>
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
