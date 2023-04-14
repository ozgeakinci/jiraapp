import React from "react";
import "../App.css";
import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  return (
    <div className="tasks-list">
      {tasks.map((tasks) => {
        <TaskCard tasks={tasks} key={tasks.id} />;
      })}
      <h3>Merhaba</h3>
    </div>
  );
}

export default TaskList;
