import { createSlice } from "@reduxjs/toolkit";

const TasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        HideDone: false,
    },
    reducers: {
        addTask: ({tasks}, {payload}) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.HideDone = !state.HideDone;
        }
    },
});

export const {addTask, toggleHideDone} = TasksSlice.actions;
export const selectTasks = state => state.tasks;
export default TasksSlice.reducer;