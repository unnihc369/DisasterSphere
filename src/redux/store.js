// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import allUsersSlice from './allUsersSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        users:allUsersSlice,
    },
});

export default store;
