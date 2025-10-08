import React, { useState, useRef } from "react";
import { ButtonAdd, Input, StyledForm } from "./styled";

const Form = ({addNewTask}) => {
   const [newTaskContent, setNewTaskContent] = useState("");
   const inputRef = useRef(null);

   const onFormSubmit = (event) => {
    event.preventDefault();
    if(newTaskContent.trim() === "") {
        return;
    }
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
    inputRef.current.focus();
   }
   
    return (
    <StyledForm onSubmit={onFormSubmit}>
    <Input
    ref={inputRef}
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