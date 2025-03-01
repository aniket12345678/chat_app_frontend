import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice, chatSlice } from "./reducers";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    authSlice: authSlice.reducer,
    chatSlice: chatSlice.reducer
});

const mainReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: mainReducer,
    devTools: true,
    middleware: (getMiddleware) => getMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);