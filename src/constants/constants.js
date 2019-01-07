import * as root_config from '../constants/apiConfig';

export const ADD_USER = {
    ADD_USER_Api: `${root_config.api_prefix}/addCustomer`,
    ADD_USER_SUCCESS : 'ADD_USER_SUCCESS',
    ADD_USER_FAILURE : 'ADD_USER_SUCCESS'
}

export const GET_USER = {
    GET_USER_Api: `${root_config.api_prefix}/getCustomersList`,
    GET_USER_LIST_SUCCESS : 'GET_USER_LIST_SUCCESS',
    GET_USER_LIST_FAILURE : 'GET_USER_LIST_FAILURE'
}