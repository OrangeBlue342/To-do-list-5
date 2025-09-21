import React, {useState} from "react";
import Buttons from "./Buttons";
import Form from "./Form";
import Tasks from "./Tasks";



function App() {

   const [hideDoneTasks, sethideDoneTasks] = useState(false);
   const [tasks, setTasks] = useState([    
    {id: 1, content: "Przejść na Reacta", done: false },
    {id: 2, content: "Zjeść obiad", done: true },
   ])

   const togglehideDoneTasks = () => {
  sethideDoneTasks(hideDoneTasks => !hideDoneTasks);
};

const setAllDone = () => {
  setTasks(tasks => tasks.map(task => ({...task, done: true
  })));
};

  return (
     <div>
     <main className="body">
    <h1 className="header">Lista zadań</h1>
    <h2 className="tasks_header">Dodaj nowe zadanie</h2>
<Form/>
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
/>

</main> 
 </div>
  );
}

export default App;
