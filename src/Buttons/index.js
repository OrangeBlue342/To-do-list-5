
import { Button, Wrapper } from "./styled";

const Buttons = ({tasks, hideDoneTasks, togglehideDoneTasks, setAllDone}) => {
    // Ensure tasks is always an array
    const safeTasks = Array.isArray(tasks) ? tasks : [];
    
    if (safeTasks.length === 0) {
        return null;
    }

    return (
        <Wrapper>
            <Button onClick={togglehideDoneTasks}>
                {hideDoneTasks ? "Pokaż" : "Ukryj"} skończone zadania
            </Button>
            <Button 
                onClick={() => setAllDone()}
                disabled={safeTasks.every(({done}) => done)}>
                Oznacz wszystkie jako ukończone
            </Button>
        </Wrapper>
    );
};

export default Buttons