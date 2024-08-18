import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://disaster-sphere-backend.vercel.app/user/users');
    const data = await response.json();
    return data;
});

export const updateUserAdminStatus = createAsyncThunk('users/updateUserAdminStatus', async ({ id, isAdmin }) => {
    const response = await fetch(`https://disaster-sphere-backend.vercel.app/user/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isAdmin }),
    });
    const data = await response.json();
    return data.user;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
    const response = await fetch(`https://disaster-sphere-backend.vercel.app/user/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Failed to delete the user');
    }

    return id;
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
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user._id !== action.payload);
            });
    },
});

export default allUsersSlice.reducer;
