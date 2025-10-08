
import Buttons from "./Buttons";
import Form from "./Form";
import Tasks from "./Tasks";
import { HeaderL, HeaderT, Wrapper } from "./styled";
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
    <HeaderT>Dodaj nowe zadanie</HeaderT>
<Form addNewTask={addNewTask}/>
<Wrapper>
<HeaderL>Lista zadań
    <Buttons 
    tasks={tasks} 
    hideDoneTasks={hideDoneTasks}
    setAllDone={setAllDone}
    togglehideDoneTasks={togglehideDoneTasks}
    /> 
</HeaderL>
</Wrapper>

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
