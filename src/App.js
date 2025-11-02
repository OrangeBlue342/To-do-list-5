import React from "react";
import Tasks from "./features/tasks/TasksPage/Tasks";
import Navigation from "./Navigation";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { toTask, toAuthor, toTasks } from "./routes";
import AuthorPage from "./features/Author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";


export default () => (
    <HashRouter>
    <Navigation />
    
        <Switch>
            <Route path={toTask()}>
             <TaskPage/>
            </Route>
            <Route path={toTasks()}>
           <Tasks />
            </Route>
            <Route path={toAuthor()}>
            <AuthorPage />
            </Route>
             <Redirect to={toTasks()}/>
        </Switch>
   
    </HashRouter>
);