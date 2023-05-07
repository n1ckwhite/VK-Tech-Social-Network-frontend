import {configureStore} from "@reduxjs/toolkit";
import {loginApi} from "../api/loginApi";

export const store = configureStore({
    reducer: {
        [loginApi.reducerPath]: loginApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loginApi.middleware),
})