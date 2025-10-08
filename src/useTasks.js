import { useState, useEffect} from "react";

const getInitialTasks = () => {
const tasksFromLocalStorage = localStorage.getItem("tasks");

return tasksFromLocalStorage 
    ? JSON.parse(tasksFromLocalStorage)
    : [];
};

export const useTasks = () => {

    const [tasks, setTasks] = useState(getInitialTasks);
    const [hideDoneTasks, sethideDoneTasks] = useState(false);
     

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

const togglehideDoneTasks = () => {
  sethideDoneTasks(hideDoneTasks => !hideDoneTasks);
};

const removeTask = (id) => {
setTasks(tasks => tasks.filter(task => task.id !== id));
};

const toggleTasksDone = (id) => {
  setTasks(tasks => tasks.map(task => {
    if(task.id === id) {
      return {...task, done: !task.done}
    }

  return task;
  }));
}

const setAllDone = () => {
  setTasks(tasks => tasks.map(task => ({...task, done: true
  })));
};

const addNewTask = (content) => {
setTasks(tasks => [
  ...tasks,
  {
    content,
    done: false,
    id: tasks.length === 0 ? 1 : tasks[tasks.length -1].id +1,
  },
])
};

return {tasks, 
        addNewTask,
        hideDoneTasks,
        sethideDoneTasks,
        togglehideDoneTasks, 
        removeTask, 
        toggleTasksDone, 
        setAllDone}
};