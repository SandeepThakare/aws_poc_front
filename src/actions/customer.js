import axios from 'axios';
import { ADD_USER } from "../constants/constants";
import * as common from '../constants/apiConfig';
import thunk from 'redux-thunk';

export function addCustomer(data) {
    return function (dispatch, getState) {
        axios.post(`${ADD_USER.ADD_USER_Api}/${data.email}`, data)
            .then(res => {
                return dispatch({ type: ADD_USER.ADD_USER_SUCCESS, payload: res.data.data });
            })
            .catch(error => {
                return dispatch({ type: ADD_USER.ADD_USER_FAILURE, payload: error });
            });
    };
}