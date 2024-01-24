import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

import activeReducer from './slices/active';
import spaceReducer from './slices/space';
import todosReducer from './slices/todos';
import authReducer from './slices/auth';
import errReducer from './slices/error'


const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: ["auth"],
  //   blacklist: [],
};

const rootReducer = combineReducers({
  active : activeReducer,
  space : spaceReducer,
  todos : todosReducer,
  auth : authReducer,
  error : errReducer
});

export { rootPersistConfig,rootReducer};