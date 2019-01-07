import axios from 'axios';
import { ADD_USER } from "../constants/constants";
import { GET_USER } from "../constants/constants";
import * as common from '../constants/apiConfig';
import thunk from 'redux-thunk';

export function addCustomer(data) {
    return function (dispatch, getState) {
        axios.post(`${ADD_USER.ADD_USER_Api}/${data.email}`, data)
            .then(res => {
                console.log('Response is ---- ', res);
                return dispatch({ type: ADD_USER.ADD_USER_SUCCESS, payload: res.data.data });
            })
            .catch(error => {
                console.log('Error is ---- ', error);
                return dispatch({ type: ADD_USER.ADD_USER_FAILURE, payload: error });
            });
    };
}

export function getCustomer() {
    console.log("inside getCustomer")
    return function (dispatch, getState) {
        axios.get(`${GET_USER.GET_USER_Api}`)
            .then(res => {
                console.log('Response is ---- ', res);
                return dispatch({ type: GET_USER.GET_USER_LIST_SUCCESS, payload: res.data.Items });
            })
            .catch(error => {
                console.log('Error is ---- ', error);
                return dispatch({ type: GET_USER.GET_USER_LIST_FAILURE, payload: error });
            });
    };
}