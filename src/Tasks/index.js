import "./index.css";

const Tasks = ({tasks, toggleAllTasksDone, toggleHideDoneTasks, removeTask, toggleTasksDone}) => {
    const safeTasks = Array.isArray(tasks) ? tasks : [];
    return (
        <ul className="tasks">
            {safeTasks.map(task => (
                <li key={task.id}
                    className={`list_item ${toggleAllTasksDone && toggleHideDoneTasks ? "tasks_item--hidden" : ""}`}
                >
                    <button 
                        className="button_done"
                        onClick={() => toggleTasksDone(task.id)}
                        >
                        {task.done ? "✔" : ""}
                    </button>
                    <span className={`tasks__content${task.done ? " list_item_done" : ""}`}>
                        {task.content}
                    </span>
                    <button 
                        className="button_remove"
                        onClick={() => removeTask(task.id)}
                        >🗑</button>
                </li>
            ))}
        </ul>
    );
};

export default Tasks