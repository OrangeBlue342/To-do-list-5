import React from "react";
import Section from "../../../common/Section";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { Container } from "./styled";





function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    
    return (
    <div>  
    <h2>Szczegóły zadania</h2>
<Container>
    <Section
    title={task ? task.content : "Nie znaleziono zadania"}
    body={!!task && (    
            <>
            <><strong>Ukończono: </strong>{task.done ? "Tak" : "Nie"}</>
            </>
    )}
    />
</Container>
</div> 
    );
}

export default TaskPage;
