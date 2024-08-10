// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import allUsersSlice from './allUsersSlice';
import disasterSlice from './disasterSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        users:allUsersSlice,
        disasters:disasterSlice,
    },
});

export default store;
