import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import usersReducer from './userlist';
import addUserReducer from './adduser';
import delUser from './deluser';
import addCustomer from './addCustomer';
import getCustomerList from './getuser';
import getCustomerByEmail from './getCustomerByEmail';
import uploadImage from './uploadImage';

const rootReducer = combineReducers({
    usersReducer:usersReducer,
    addUserReducer:addUserReducer,
    delUserReducer:delUser,
    addCustomer,
    getCustomerList,
    getCustomerByEmail,
    uploadImage,
    form: reduxFormReducer,
    router: routerReducer
})

export default rootReducer;
