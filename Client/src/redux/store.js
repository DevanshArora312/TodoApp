import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
// import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer } from './root_reducers.js';

const store = configureStore({
    // reducer: persistReducer(rootPersistConfig, rootReducer),
    reducer : rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    })
});

// const persistor = persistStore(store);
const { dispatch } = store;
const useSelector = useAppSelector;
const useDispatch = () => useAppDispatch();
export {store, dispatch,useSelector,useDispatch};