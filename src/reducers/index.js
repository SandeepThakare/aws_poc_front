import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import usersReducer from './userlist';
import addUserReducer from './adduser';
import delUser from './deluser';
import addCustomer from './addCustomer';
const rootReducer = combineReducers({
    usersReducer:usersReducer,
    addUserReducer:addUserReducer,
    delUserReducer:delUser,
    addCustomer,
    form: reduxFormReducer,
    router: routerReducer
})

export default rootReducer;
