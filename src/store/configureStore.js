import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

 
// Note: this API requires redux@>=3.1.0
const createstorewithapplymiddleware = applyMiddleware(
	thunk
)(createStore)

export default function configureStore(initialState){

	return createstorewithapplymiddleware(
		rootReducer
	);

}

// const mystore = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );
// export default function configureStore(initialState){

// 	return mystore;

// }


