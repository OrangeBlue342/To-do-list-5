import { createSlice } from "@reduxjs/toolkit";

const TasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({tasks}, {payload: task}) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({tasks}, {payload}) => {
            const index = tasks.findIndex(({id}) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({tasks}, {payload}) => {
            const index = tasks.findIndex(({id}) => id === payload);
            tasks.splice(index, 1);
        },
        setAllDone: ({tasks}) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        fetchExampleTasks: () => { },
        setTasks: (state, {payload: tasks}) => {
            state.tasks = tasks;
        },
    },
});

export const {
    addTask, 
    toggleHideDone, 
    toggleTaskDone, 
    removeTask, 
    setAllDone,
    fetchExampleTasks,
    setTasks
} = TasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectEveryTaskDone = (state) => selectTasks(state).every(({done}) => done);

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({id}) => id === taskId);

export const selectTasksbyQuery = (state, query) => {
   const tasks = selectTasks(state);
   
    if (!query || query.trim() === "") {
        return tasks;
    }
       
return selectTasks(state).filter(({content}) => 
    content.toUpperCase().includes(query.trim().toUpperCase()));
}

export default TasksSlice.reducer;