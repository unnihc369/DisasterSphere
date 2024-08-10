// src/slices/allUsersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('http://localhost:5000/user/users');
    const data = await response.json();
    return data;
});

// Async thunk to update a user's admin status
export const updateUserAdminStatus = createAsyncThunk('users/updateUserAdminStatus', async ({ id, isAdmin }) => {
    const response = await fetch(`http://localhost:5000/user/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isAdmin }),
    });
    const data = await response.json();
    return data.user; // Assuming the updated user is returned in data.user
});

const allUsersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(updateUserAdminStatus.fulfilled, (state, action) => {
                const { id, isAdmin } = action.payload;
                const existingUser = state.users.find(user => user._id === id);
                if (existingUser) {
                    existingUser.isAdmin = isAdmin;
                }
            });
    },
});

export default allUsersSlice.reducer;
