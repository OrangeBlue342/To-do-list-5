import React from "react";
import Section from "../../../common/Section";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";




function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    
    return (
        <div>
            <h2>Dodaj nowe zadanie</h2>
    <Section
    title={task ? task.content : "Nie znaleziono zadania"}
    body={    
            <>
            <strong>Ukończono:</strong>
            </>
    }
    />
</div>
    );
}

export default TaskPage;
