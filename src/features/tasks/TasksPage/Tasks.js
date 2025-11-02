
import Buttons from "./Buttons";
import Form from "./Form";
import TasksList from "./TasksList";
import Section from "../../../common/Section";
import Search from "../TasksPage/Search";
import FetchExampleTasksButton from "./fetchExampleTasksButton";


function Tasks() {
  
  return (
     <div>
     <main>
    <h1 className="header">Lista zadań</h1>
    
    <Section title="Dodaj nowe zadanie" 
             body={<Form />}
             extraHeaderContent={<FetchExampleTasksButton/>} />

    <Section 
    title="Wyszukiwarka"
    body={<Search />}
    />
    
   <Section 
     title="Lista zadań" 
     body={<TasksList /> } 
     extraHeaderContent={<Buttons />} />


</main> 
 </div>
  );
}

export default Tasks;
