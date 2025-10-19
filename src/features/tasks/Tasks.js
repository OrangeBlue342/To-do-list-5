
import Buttons from "./Buttons";
import Form from "./Form";
import TasksList from "./TasksList";
import Section from "../../common/Section";
import { useTasks } from "../../useTasks";



function Tasks() {

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
    
   <Section 
     title="Lista zadań" 
     body={<TasksList 
     tasks={tasks} 
     hideDoneTasks={hideDoneTasks} 
     removeTask={removeTask} 
     toggleTasksDone={toggleTasksDone}/> } 

   extraHeaderContent={
     <Buttons 
     tasks={tasks} 
     hideDoneTasks={hideDoneTasks}
     setAllDone={setAllDone}
     togglehideDoneTasks={togglehideDoneTasks} /> 
} />


</main> 
 </div>
  );
}

export default Tasks;
