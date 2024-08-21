import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice';
import looger from '../redux/middleweres/logger';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(looger),
})

export default store;