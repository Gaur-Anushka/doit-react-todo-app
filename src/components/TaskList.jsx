import React from "react";

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="tasklist">
      {tasks.length === 0 ? (
        <p className="text-para">No tasks added yet.</p>
      ) : (
        <ul >
          {tasks.map((task) => (
            <li key={task.id} className="task-ul">
              <span className="task-span">{task.text}</span>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="task-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
