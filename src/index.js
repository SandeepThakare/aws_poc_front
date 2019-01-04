import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from 'react-redux';
// import { store, history} from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux"; //react-redux is the official package used to make Redux and React work together.
// import store from './store';
import configureStore from "./store/configureStore";
const configStore = configureStore();

// ReactDOM.render(<App />, document.getElementById('root'));
//below line This lets your components see the store.
ReactDOM.render((
  <Provider store={configStore}>
    {/* <App /> */}
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>

), document.getElementById('root'));

registerServiceWorker();
