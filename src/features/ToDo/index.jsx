import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import NotFound from "../../components/NotFound";
function Todo(){
    const match = useRouteMatch();
    return (
        <div>
            To do Page 
            <Switch>
                <Route path={`${match.path}`} exact component={ListPage}></Route>
                <Route path={`${match.path}/:todoId`} exact component={DetailPage}></Route>

                <Route component={NotFound}></Route>
            </Switch>
        </div>
    );
}

export default Todo;