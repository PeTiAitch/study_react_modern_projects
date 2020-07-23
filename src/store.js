import { createStore, combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { todos } from './todos/reducers';

const reducers = { todos };

const persistConfig = {
    key: 'root', 
    storage,
    stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

// this is with the setting that is required for the redux devtools to work
// export const configureStore = () => {
//     return createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// }

export const configureStore = () => {
    return createStore(persistedReducer);
}