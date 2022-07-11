import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { logger } from './utilities';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const persistConfig = {
     key: 'root',
     storage: storage,
     whitelist: ['bag', 'favourite']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = createStore(
     persistedReducer,
     composeWithDevTools(applyMiddleware(logger, thunk))
);


export const persistor = persistStore(store);

export default store


