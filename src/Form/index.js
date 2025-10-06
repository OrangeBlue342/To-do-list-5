import React, { useState } from "react";
import { ButtonAdd, Input, StyledForm } from "./styled";

const Form = ({addNewTask}) => {
   const [newTaskContent, setNewTaskContent] = useState("");

   const onFormSubmit = (event) => {
    event.preventDefault();
    if(newTaskContent.trim() === "") {
        return;
    }
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
   }
   
    return (
    <StyledForm onSubmit={onFormSubmit}>
    <Input
    value={newTaskContent}
    placeholder="Co jest do zrobienia?"
    onChange={(event) => setNewTaskContent(event.target.value)}
    />
    <ButtonAdd>Dodaj zadanie
    </ButtonAdd>
</StyledForm>
)
}

export default Form