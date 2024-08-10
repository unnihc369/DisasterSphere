import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch non-verified disasters
export const fetchNonVerifiedDisasters = createAsyncThunk('disasters/fetchNonVerified', async () => {
    const response = await fetch('http://localhost:5000/dis/');
    if (!response.ok) {
        throw new Error('Failed to fetch non-verified disasters');
    }
    const data = await response.json();
    return data;
});

// Verify a disaster
export const verifyDisaster = createAsyncThunk('disasters/verify', async (id) => {
    const response = await fetch(`http://localhost:5000/dis/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isVerified: true }),
    });
    if (!response.ok) {
        throw new Error('Failed to verify disaster');
    }
    const data = await response.json();
    return data;
});

// Delete a disaster
export const deleteDisaster = createAsyncThunk('disasters/delete', async (id) => {
    const response = await fetch(`http://localhost:5000/dis/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete disaster');
    }
    return id; 
});

const disasterSlice = createSlice({
    name: 'disasters',
    initialState: {
        disasters: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNonVerifiedDisasters.fulfilled, (state, action) => {
                state.disasters = action.payload;
            })
            .addCase(verifyDisaster.fulfilled, (state, action) => {
                const index = state.disasters.findIndex(disaster => disaster._id === action.payload._id);
                if (index !== -1) {
                    state.disasters[index] = action.payload;
                }
            })
            .addCase(deleteDisaster.fulfilled, (state, action) => {
                state.disasters = state.disasters.filter(disaster => disaster._id !== action.payload);
            })
            .addCase(fetchNonVerifiedDisasters.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(verifyDisaster.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(deleteDisaster.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export default disasterSlice.reducer;
