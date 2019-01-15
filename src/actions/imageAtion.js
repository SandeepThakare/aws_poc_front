import axios from 'axios';
import { UPLOAD_IAMGE } from "../constants/constants";
import { GET_USER } from "../constants/constants";
import * as common from '../constants/apiConfig';
import thunk from 'redux-thunk';
import { Redirect } from 'react-router-dom';

export function uploadImage(data) {
    console.log('Data ---- ', data)
    return function (dispatch, getState) {
        axios.post(`${UPLOAD_IAMGE.UPLOAD_IAMGE_Api}`, data)
            .then(res => {
                console.log('Response is ---- ', res);
                // props.history.push('/customers_list');
                return dispatch({ type: UPLOAD_IAMGE.UPLOAD_IAMGE_SUCCESS, payload: res.data });
            })
            .catch(error => {
                console.log('Error is ---- ', error);
                return dispatch({ type: UPLOAD_IAMGE.UPLOAD_IAMGE_FAILURE, payload: error });
            });
    };
}