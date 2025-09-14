import "./index.css"

const Buttons = (props) => {
    if (props.tasks.lenght === 0) {
    return null;
}
   
    return (
    <div className="buttons">
         <button className="buttons_button1">
        {props.hideDoneTasks ? "Pokaż" : "Ukryj"} skończone zadania</button>
        <button className="buttons_button2"
        disabled={props.tasks.every (({ done }) => done)}>
        Oznacz wszystkie jako ukończone</button>
    </div>
)
};

export default Buttons