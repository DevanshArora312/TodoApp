import { combineReducers } from 'redux';
// import storage from 'redux-persist/lib/storage';

import activeReducer from './slices/active';
import spaceReducer from './slices/space';
import todosReducer from './slices/todos';
import authReducer from './slices/auth'


// const rootPersistConfig = {
//   key: 'root',
//   storage,
//   keyPrefix: 'redux-',
//   //   whitelist: [],
//   //   blacklist: [],
// };

const rootReducer = combineReducers({
  active : activeReducer,
  space : spaceReducer,
  todos : todosReducer,
  auth : authReducer
});

export { rootReducer};