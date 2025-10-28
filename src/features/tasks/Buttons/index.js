import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { Button, Wrapper } from "./styled";
import { toggleHideDone, 
         setAllDone, 
         selectAreTasksEmpty, 
         selectHideDone, 
         selectEveryTaskDone, 
         fetchExampleTasks } from "../tasksSlice";

const Buttons = () => {

    const AreTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDOne = useSelector(selectEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
          {!AreTasksEmpty && ( 
            <>
            <Button onClick={() => dispatch(toggleHideDone())}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button 
                onClick={() => dispatch(setAllDone())}
                disabled={isEveryTaskDOne}>
                Oznacz wszystkie jako ukończone
            </Button>
            </>
            )}
        </Wrapper>
    );
};

export default Buttons