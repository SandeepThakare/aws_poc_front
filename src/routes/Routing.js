import React from "react";
import { Route, Switch } from "react-router-dom";
import POC_Lambda from '../components/lambda';
import Dashboard from '../components/dashboard';

const Routing = () => (
    <div>
        {/* <Route exact path='/map' component={GoogleMap} />
        <Route exact path='/barChart' component={BarChart} />
        <Route exact path='/users' component={UserList}/>
        <Route exact path='/add' component={AddUser}/> */}
        <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/poc_lambda' component={POC_Lambda} />
        </Switch>
    </div>
);
export default Routing;