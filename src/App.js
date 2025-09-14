import Buttons from "./Buttons";
import Form from "./Form";
import Tasks from "./Tasks";


const tasks = [
{id: 1, content: "Przejść na Reacta", done: false },
{id: 2, content: "Zjeść obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
      <main className="body">
    <h1 className="header">Lista zadań</h1>
    <h2 className="tasks_header">Dodaj nowe zadanie</h2>
<Form/>
<div className="List">
<h2 className="list_header">Lista zadań
    <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks}/> 
</h2>
</div>

<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>

</main>  
  );
}

export default App;
