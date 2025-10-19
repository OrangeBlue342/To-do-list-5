import { useSelector } from "react-redux";
import {List, Item, Content, Button} from "./styled";
import { selectTasks } from "../tasksSlice";


const TasksList = ({ removeTask, toggleTasksDone, toggleAllTasksDone}) => {
    
    
    const {tasks, HideDone} = useSelector(selectTasks);
    
    return (
        <List>
            {tasks.map(task => (
                <Item 
                key={task.id}
                hidden={toggleAllTasksDone && HideDone}>
                    <Button
                        button_done
                        onClick={() => toggleTasksDone(task.id)}>
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

export default TasksList