import React, { useState, useRef } from "react";
import {useDispatch} from "react-redux";
import { ButtonAdd, Input, StyledForm } from "./styled";
import { addTask } from "../tasksSlice";
import { Content } from "../TasksList/styled";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
   
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

   const onFormSubmit = (event) => {
    event.preventDefault();
    
    if(newTaskContent.trim() === "") {
        return;
    }

    dispatch(addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid(),
    }));

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
    <ButtonAdd>Dodaj zadanie</ButtonAdd>
</StyledForm>
)
}

export default Form