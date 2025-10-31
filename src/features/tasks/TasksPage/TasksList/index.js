import { useSelector, useDispatch } from "react-redux";
import {List, Item, Content, Button} from "./styled";
import { selectHideDone, toggleTaskDone, removeTask, selectTasksbyQuery } from "../../tasksSlice";
import { useLocation, Link } from "react-router-dom";


const TasksList = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("szukaj");
    
    const tasks = useSelector(state => selectTasksbyQuery(state, query));
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
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
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