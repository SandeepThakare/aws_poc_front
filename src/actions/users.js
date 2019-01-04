// import axios from 'axios';
// import * as ActionType from "../constants/constants";
// import thunk from 'redux-thunk';



// export function getUserList() {
//   // debugger;
//   return function(dispatch, getState) {
//     axios.get("http://localhost:4000/api/users/getUsers")
//       .then(res => {
//         return dispatch({ type: ActionType.USER_LIST, payload: res.data.data });
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// }


// export function addUser(data) {
//   return function(dispatch, getState) {
//     axios.post("http://localhost:4000/api/users/registerUser",data)
//       .then(res => {
//         return dispatch({ type: ActionType.ADD_USER, payload: res.data.data });
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// }

// export function deleteUser(key) {
//   var data={
//     id: key
//   }
//   return function(dispatch, getState) {
//     axios.post('http://localhost:4000/api/users/delUser',data)
//       .then(res => {
//         return dispatch({ type: ActionType.DEL_USER, payload: res.data });
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// }
