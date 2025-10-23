import { useSelector, useDispatch } from "react-redux";
import {List, Item, Content, Button} from "./styled";
import { selectHideDone, selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";


const TasksList = () => {
    
    
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);


    const dispatch = useDispatch();
    
    return (
        <List>
            {tasks.map(task => (
                <Item 
                key={task.id}
                hidden={task.done && hideDone}>
                    <Button
                        button_done
                        onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        {task.content}
                    </Content>
                    <Button
                        button_remove
                        onClick={() => dispatch(removeTask(task.id))}
                        >🗑</Button>
                </Item>
            ))}
        </List>
    );
};

export default TasksList