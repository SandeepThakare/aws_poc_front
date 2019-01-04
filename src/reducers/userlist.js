export default function userListReducer(state=null,action){
    switch(action.type){
        case 'USER_LIST':
        return(action.payload);
        default:
         return state;
    }
}