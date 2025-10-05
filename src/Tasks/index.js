
import {List, Item, Content, Button} from "./styled";

const Tasks = ({tasks, toggleAllTasksDone, toggleHideDoneTasks, removeTask, toggleTasksDone}) => {
    const safeTasks = Array.isArray(tasks) ? tasks : [];
    return (
        <List>
            {safeTasks.map(task => (
                <Item 
                key={task.id}
                hidden={toggleAllTasksDone && toggleHideDoneTasks}
                >
                    <Button
                        button_done
                        onClick={() => toggleTasksDone(task.id)}
                        >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        {task.content}
                    </Content>
                    <Button
                        button_remove
                        onClick={() => removeTask(task.id)}
                        >🗑</Button>
                </Item>
            ))}
        </List>
    );
};

export default Tasks