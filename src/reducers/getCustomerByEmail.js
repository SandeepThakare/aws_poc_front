import { GET_CUSTOMER_BY_EMAIL } from '../constants/constants';

const initialState = {
    GetCustomerByEmail: null,
};

export default function getCustomerByEmail(state = [], action) {
    console.log('Action payload ===> ', typeof action.payload, action.payload);
    switch (action.type) {
        case GET_CUSTOMER_BY_EMAIL.GET_CUSTOMER_BY_EMAIL_SUCCESS:
            // return (action.payload);
            console.log('In side payload --- ', action.payload)
            return Object.assign({}, state, { GetCustomerByEmail: action.payload });
        case GET_CUSTOMER_BY_EMAIL.GET_CUSTOMER_BY_EMAIL_FAILURE:
            return Object.assign({}, state, { GetCustomerByEmailErr: action.payload });
        default:
            return initialState;
    }
}