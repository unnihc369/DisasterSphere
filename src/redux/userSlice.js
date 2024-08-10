import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const getUserFromCookies = () => {
    const userCookie = Cookies.get('user');
    if (userCookie) {
        try {
            return JSON.parse(userCookie);
        } catch (error) {
            console.error('Failed to parse user cookie:', error);
            return null;
        }
    }
    return null;
};

const initialState = {
    user: getUserFromCookies(),
    isAdmin: getUserFromCookies()?.isAdmin || false,
    token: Cookies.get('token') || null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            const { user, token } = action.payload;

            state.user = user;
            state.isAdmin = user?.isAdmin || false;
            state.token = token;

            Cookies.set('token', token, {
                expires: 1, // Expires in 1 day
                secure: true,
                sameSite: 'strict'
            });

            Cookies.set('user', JSON.stringify(user), {
                expires: 1, // Expires in 1 day
                secure: true,
                sameSite: 'strict'
            });
        },
        logout: (state) => {
            state.user = null;
            state.isAdmin = false;
            state.token = null;

            Cookies.remove('token');
            Cookies.remove('user');
        },
    },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
