import { createStore } from 'redux';
import * as redux from 'redux';
import rootReducer from './reducer';
window.redux = redux;
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;