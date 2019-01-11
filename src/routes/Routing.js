import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';


const LoadableDashboard =Loadable({
    loader: () => import('../components/dashboard/dashboard'),
    loading() {
      return <div>Loading..</div>
    }
  });
  const LoadablePOC_Lambda =Loadable({
    loader: () => import('../components/lambda/lambda_add.js'),
    loading() {
      return <div>Loading..</div>
    }
  });
  const LoadableCustomersView =Loadable({
    loader: () => import('../components/lambda/lambda_list.js'),
    loading() {
      return <div>Loading..</div>
    }
  });
  const LoadableCustomerAdd =Loadable({
    loader: () => import('../components/lambda/lambda_add.js'),
    loading() {
      return <div>Loading..</div>
    }
  });
  const LoadableS3Upload =Loadable({
    loader: () => import('../components/s3/s3-upload.js'),
    loading() {
      return <div>Loading..</div>
    }
  });
const Routing = () => (
    <div>
            <Route exact path='/dashboard' component={LoadableDashboard} />
            <Route exact path='/poc_lambda' component={LoadablePOC_Lambda} />            
            <Route exact path='/new_customer' component={LoadableCustomerAdd} />
            <Route exact path='/list_customer' component={LoadableCustomersView} />
            <Route exact path='/s3_upload' component={LoadableS3Upload} />
        {/* <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/poc_lambda' component={POC_Lambda} />
            <Route exact path='/customers_list' component={CustomersView} />
            <Route exact path='/s3_upload' component={S3Upload} />
        </Switch> */}
    </div>
);
export default Routing;