import { ADD_USER } from '../constants/constants';

const initialState = {
    Add_User_Response: [],
};

export default function addUserReducer(state = [], action) {
    switch (action.type) {
        case ADD_USER.ADD_USER_SUCCESS:
            // return (action.payload);
            return Object.assign({}, state, { Add_User_Response: action.Add_User_Response });
        case ADD_USER.ADD_USER_FAILURE:
            return Object.assign({}, state, { Add_User_Response_Err: action.Add_User_Response_Err });
        default:
            return initialState;
    }
}