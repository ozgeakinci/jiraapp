import React, { useState } from "react";
import "../App.css";
import TaskCreate from '../components/TaskCreate'


const TaskCard = ({ task, setTasks }) => {
  const [showEdit, showSetEdit] = useState(false);

  const handleDelete = (id) => {
    setTasks((preNewTask) => preNewTask.filter((task) => task.id !== id));
  };
  const handleEditClick = () => {
    showSetEdit(true);
   
  };

  const handleTaskUpdate = (updatedTask) => {
    setTasks((prevTasks) => {
      return prevTasks.map((prevTask) => {
        if (prevTask.id === updatedTask.id) {
          return { ...prevTask, ...updatedTask };
        }
        return prevTask;
      });
    });
    showSetEdit(false);
  };


  return (
    <div className="task-card">
      {showEdit ? (
        <TaskCreate  task={task} taskUpdate ={true} onTaskUpdate={handleTaskUpdate} />
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <p>{task.id}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button
              className="task-delete btn"
              onClick={() => handleDelete(task.id)}
            >
              Sil
            </button>
            <button className="task-edit btn" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
