import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./TodoList.css";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return; // Prevent empty tasks
    setTasks([...tasks, { id: uuidv4(), task: newTask, done: false }]);

    setNewTask(""); // Clear input field
  };

  // localStorage.setItem("anu",tasks)
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleMarkAsDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="box">
        <input
          type="text"
          value={newTask}
          placeholder="Add a task..."
          onChange={handleInputChange}
        />
        <i className="fa-solid fa-plus plus" onClick={handleAddTask}></i>
      </div>
      <div className="list">
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className={task.done ? "done" : ""}>
              {task.task}
              <div>
                
               <button id="mark" 
               className="btn" 
               onClick={() => handleMarkAsDone(task.id)}>
               {task.done ? <i className="fa-solid fa-undo"></i> : <i className="fa-solid fa-check"></i>}
               </button>

                <button
                  id="dltBtn"
                  className="btn"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
