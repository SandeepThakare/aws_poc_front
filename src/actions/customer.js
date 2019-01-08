import axios from 'axios';
import { ADD_USER, GET_CUSTOMER_BY_EMAIL } from "../constants/constants";
import { GET_USER } from "../constants/constants";
import * as common from '../constants/apiConfig';
import thunk from 'redux-thunk';
import { Redirect } from 'react-router-dom';

export function addCustomer(data, props) {
    console.log('Data ---- ', data)
    return function (dispatch, getState) {
        axios.post(`${ADD_USER.ADD_USER_Api}/${data.email}`, data)
            .then(res => {
                console.log('Response is ---- ', res);
                props.history.push('/customers_list');
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
                console.log('Response is ---- ', typeof res.data.Items, res.data.Items);
                return dispatch({ type: GET_USER.GET_USER_LIST_SUCCESS, payload: res.data.Items });
            })
            .catch(error => {
                console.log('Error is ---- ', error);
                return dispatch({ type: GET_USER.GET_USER_LIST_FAILURE, payload: error });
            });
    };
}

export function getCustomerByEmail(email) {
    console.log("inside getCustomerByEmail")
    return function (dispatch, getState) {
        axios.get(`${GET_CUSTOMER_BY_EMAIL.GET_CUSTOMER_BY_EMAIL_Api}/${email}`)
            .then(res => {
                console.log('Response is ---- ', typeof res.data.Items, res.data.Items);
                return dispatch({ type: GET_CUSTOMER_BY_EMAIL.GET_CUSTOMER_BY_EMAIL_SUCCESS, payload: res.data });
            })
            .catch(error => {
                console.log('Error is ---- ', error);
                return dispatch({ type: GET_CUSTOMER_BY_EMAIL.GET_CUSTOMER_BY_EMAIL_FAILURE, payload: error });
            });
    };
}