import { UPLOAD_IAMGE } from '../constants/constants';

const initialState = {
    UploadImageRes: null,
};

export default function getCustomerByEmail(state = [], action) {
    console.log('Action payload ===> ', typeof action.payload, action.payload);
    switch (action.type) {
        case UPLOAD_IAMGE.UPLOAD_IAMGE_SUCCESS:
            // return (action.payload);
            console.log('In side payload --- ', action.payload)
            return Object.assign({}, state, { UploadImageRes: action.payload });
        case UPLOAD_IAMGE.UPLOAD_IAMGE_FAILURE:
            return Object.assign({}, state, { UploadImageResErr: action.payload });
        default:
            return initialState;
    }
}