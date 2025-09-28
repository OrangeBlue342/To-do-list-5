import React, {useEffect, useState} from "react";
import Buttons from "./Buttons";
import Form from "./Form";
import Tasks from "./Tasks";

const getInitialTasks = () => {
const tasksFromLocalStorage = localStorage.getItem("tasks");

return tasksFromLocalStorage 
    ? JSON.parse(tasksFromLocalStorage)
    : [];
};

function App() {

   const [hideDoneTasks, sethideDoneTasks] = useState(false);



   const [tasks, setTasks] = useState(
    getInitialTasks
   );

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

   const togglehideDoneTasks = () => {
  sethideDoneTasks(hideDoneTasks => !hideDoneTasks);
};

const removeTask = (id) => {
setTasks(tasks => tasks.filter(task => task.id !== id));
};

const toggleTasksDone = (id) => {
  setTasks(tasks => tasks.map(task => {
    if(task.id === id) {
      return {...task, done: !task.done}
    }

  return task;
  }));
}

const setAllDone = () => {
  setTasks(tasks => tasks.map(task => ({...task, done: true
  })));
};

const addNewTask = (content) => {
setTasks(tasks => [
  ...tasks,
  {
    content,
    done: false,
    id: tasks.length === 0 ? 1 : tasks[tasks.length -1].id +1,
  },
])
};

  return (
     <div>
     <main className="body">
    <h1 className="header">Lista zadań</h1>
    <h2 className="tasks_header">Dodaj nowe zadanie</h2>
<Form addNewTask={addNewTask}/>
<div className="List">
<h2 className="list_header">Lista zadań
    <Buttons 
    tasks={tasks} 
    hideDoneTasks={hideDoneTasks}
    setAllDone={setAllDone}
    togglehideDoneTasks={togglehideDoneTasks}
    /> 
</h2>
</div>

<Tasks 
tasks={tasks} 
hideDoneTasks={hideDoneTasks}
removeTask={removeTask}
toggleTasksDone={toggleTasksDone}
/> 

</main> 
 </div>
  );
}

export default App;
