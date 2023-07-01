import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// export default configureStore({
//     reducer:{
//         user: userReducer,
//     }
// })

const persistConfig = {
    key: 'user',
    version: 1,
    storage
};

const persistedReducer = persistReducer(persistConfig, userReducer);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor }

export default store
