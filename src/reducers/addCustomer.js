export default function addCustomer(state=null,action){
    switch(action.type){
        case 'ADD_CUSTOMER':
        return(action.payload);
        default:
         return state;
    }
}