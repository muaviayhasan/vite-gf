import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import rootReducer from '../reducers';

import { createLogger } from 'redux-logger'; // import it always

const middlewares = [thunk];

if (import.meta.env.VITE_MODE === 'development') {
    middlewares.push(createLogger());
}

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.error('Failed to save to localStorage:', e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.error('Failed to load from localStorage:', e);
        return undefined;
    }
}

const store = createStore(
    rootReducer,
    loadFromLocalStorage(),
    composeWithDevTools(applyMiddleware(...middlewares))
);

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;
