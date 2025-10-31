import React from "react";
import Tasks from "./features/tasks/TasksPage/Tasks";
import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/Author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";


export default () => (
    <HashRouter>
    <nav>
        <ul>
            <li>
                <Link to="/zadania">Zadania</Link>
            </li>
            <li>
                <Link to="/autor">O autorze</Link>
            </li>
        </ul>
        <Switch>
            <Route path="/zadania/:id">
             <TaskPage/>
            </Route>
            <Route path="/zadania">
           <Tasks />
            </Route>
            <Route path="/autor">
            <AuthorPage />
            </Route>
            <Route path="/">
             <Redirect to="/zadania"/>
            </Route>
        </Switch>
    </nav>
    </HashRouter>
);