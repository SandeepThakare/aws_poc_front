
export default function delUserReducer(state=null,action){
    switch(action.type){
        case 'DEL_USER':
        return(action.payload);
        default:
         return state;
    }
}