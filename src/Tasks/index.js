import "./index.css";

const Tasks = (props) => (
<ul className="tasks">
    {props.tasks.map(task => (
        <li key={task.id}
        className={`list_item ${props.toggleAllTasksDone && props.toggleHideDoneTasks ? "tasks_item--hidden" : ""}`}
        >
            <button 
        className="button_done">
        {task.done ? "✔" : ""}
        </button>
        <span className={`tasks__content${task.done ? " list_item_done" : ""}`}>
          {task.content}
          </span>
          <button 
          className="button_remove">🗑</button>
        </li>
    ))}
</ul>
);

export default Tasks