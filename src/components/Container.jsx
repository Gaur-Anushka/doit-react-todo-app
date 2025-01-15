import React from "react";
import women from "../logo/woman.png";
import bell from "../logo/bell.png";
import reload from "../logo/reload.png";
import calendar from "../logo/calendar.png";
import { useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import actions from "../logo/actions.png";
import check from "../logo/check.png";
import star from "../logo/star.png";
import graphics from "../logo/graphics.png";
import work from "../logo/work.png";
function Container() {
  const [tasks, setTasks] = useState([]);
  // Function to add a new task
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  // Function to delete a task
  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="card">
          <img src={women} alt="App Logo" className="card-women" />
          {""}
          <h3>Abc</h3>
          <div className="card1">
            <div className="li1">
            <li className="li1-comp">
            <img src={actions} alt="App Logo" className="li1-comp
            " />
            {""}
              All Tasks</li>
           
            </div>
           <div className="li1">
            <li className="li1-comp">
            <img src={check} alt="App Logo" className="li1-comp
            " />
            {""}
               Today</li>


           </div>
           <div className="li1">
            <li className="li1-comp">
            <img src={star} alt="App Logo" className="li1-comp
            " />
            {""}
              Important</li>

           </div>
           <div className="li1">
            <li className="li1-comp">
            <img src={graphics} alt="App Logo" className="li1-comp
            " />
            {""}
              Planned</li>
           </div>
           <div className="li1">

            <li className="li1-comp"><img src={work} alt="App Logo" className="li1-comp
            " />
            {""}
              Assigned to me</li>
           </div>
          </div>
          <div className="card2">
            <li>Add List</li>
          </div>
          <div className="card3">
            <li>Today Tasks</li>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="card4">
          <h3>ToDo</h3>
          <h4>Add A Task</h4>
          <div className="card-logo">
            <img src={bell} alt="App Logo" className="card-bell" />
            {""}
            <img src={reload} alt="App Logo" className="card-reload" />
            {""}
            <img src={calendar} alt="App Logo" className="card-calendar" />
            {""}

          </div>
          <div className="card5">
            <TaskInput onAddTask={handleAddTask} /></div>
<div className="card6">
            <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />

</div>
          
        </div>
      </div>
    </div>
  );
}
export default Container;
