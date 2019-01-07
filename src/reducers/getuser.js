import { GET_USER } from '../constants/constants';

const initialState = {
   Get_User_Response: [],
};

export default function getUserReducer(state = [], action) {
    console.log('Action payload ===> ', typeof action.payload, action.payload);
    switch (action.type) {
        case GET_USER.GET_USER_LIST_SUCCESS:
            // return (action.payload);
            console.log('In side payload --- ', action.payload)
            return Object.assign({}, state, { Get_User_Response: action.payload });
        case GET_USER.GET_USER_LIST_FAILURE:
            return Object.assign({}, state, { Get_User_Response_Err: action.payload });
        default:
            return initialState;
    }
}