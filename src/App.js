
import Buttons from "./Buttons";
import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import { useTasks } from "./useTasks";



function App() {

const {
  tasks, 
        addNewTask,
        hideDoneTasks,
        togglehideDoneTasks, 
        removeTask, 
        toggleTasksDone, 
        setAllDone} = useTasks();


  return (
     <div>
     <main>
    <h1 className="header">Lista zadań</h1>
    
    <Section title="Dodaj nowe zadanie" body={<Form addNewTask={addNewTask} />} />
    
   <Section title="Lista zadań" body={<Tasks 
tasks={tasks} hideDoneTasks={hideDoneTasks} removeTask={removeTask} toggleTasksDone={toggleTasksDone}/> } 
extraHeaderContent={
    <Buttons 
    tasks={tasks} 
    hideDoneTasks={hideDoneTasks}
    setAllDone={setAllDone}
    togglehideDoneTasks={togglehideDoneTasks}
    /> 
} />


</main> 
 </div>
  );
}

export default App;
