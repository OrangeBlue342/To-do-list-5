import React, { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
   const [newTaskContent, setNewTaskContent] = useState("");

   const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
   }
   
    return (
    <form className="form" onSubmit={onFormSubmit}>
    <input 
    value={newTaskContent}
    className="form_input" 
    placeholder="Co jest do zrobienia?"
    onChange={(event) => setNewTaskContent(event.target.value)}
    />
    <button className="task_add">Dodaj zadanie</button>
</form>
)
}

export default Form