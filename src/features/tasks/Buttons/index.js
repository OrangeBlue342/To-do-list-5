import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { Button, Wrapper } from "./styled";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({setAllDone}) => {
    // Ensure tasks is always an array

    const {tasks, HideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button onClick={() => dispatch (toggleHideDone())}>
                {HideDone ? "Pokaż" : "Ukryj"} skończone zadania
            </Button>
            <Button 
                onClick={() => setAllDone()}
                disabled={tasks.every(({done}) => done)}>
                Oznacz wszystkie jako ukończone
            </Button>
        </Wrapper>
    );
};

export default Buttons