import "./index.css"

const Buttons = ({tasks, hideDoneTasks, togglehideDoneTasks, setAllDone}) => {
    // Ensure tasks is always an array
    const safeTasks = Array.isArray(tasks) ? tasks : [];
    if (safeTasks.length === 0) {
        return null;
    }

    return (
        <div className="buttons">
            <button onClick={togglehideDoneTasks} className="buttons_button1">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} skończone zadania
            </button>
            <button 
                onClick={() => setAllDone()}
                className="buttons_button2"
                disabled={safeTasks.every(({done}) => done)}
            >
                Oznacz wszystkie jako ukończone
            </button>
        </div>
    );
};

export default Buttons