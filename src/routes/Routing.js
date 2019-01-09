import React from "react";
import { Route, Switch } from "react-router-dom";
import POC_Lambda from '../components/lambda';
import Dashboard from '../components/dashboard';
import CustomersView from '../components/lambda_list';
import S3Upload from '../components/s3-upload';

const Routing = () => (
    <div>
        {/* <Route exact path='/map' component={GoogleMap} />
        <Route exact path='/barChart' component={BarChart} />
        <Route exact path='/users' component={UserList}/>
        <Route exact path='/add' component={AddUser}/> */}
        <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/poc_lambda' component={POC_Lambda} />
            <Route exact path='/customers_list' component={CustomersView} />
            <Route exact path='/s3_upload' component={S3Upload} />
        </Switch>
    </div>
);
export default Routing;