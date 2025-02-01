import { AuthDataProps } from './../../interface/redux/auth.interface';
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {http} from "../../config/api.ts";
import {authenticate, deserialize} from "../../utils/general.ts";
import { AuthInitialProps} from "../../interface/redux/auth.interface.ts";

export const getUserMe = createAsyncThunk('auth/getUserMe', async (id: number, {rejectWithValue}) => {
    try {
        const response = await http.get(`/users/${id}`)
        if (response.data === null) return rejectWithValue(response?.data)
        return await deserialize(response.data)
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const login = createAsyncThunk('auth/login', async (id: string, {rejectWithValue}) => {
    try {
        const response = await http.get(`/login?tg-id=${id}`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

const initialState: AuthInitialProps = {
    user: null,
    auth: null,
    loading: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.auth = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state: AuthInitialProps, action) => {
            const token = action.payload['Authorization'] as string
            const data: AuthDataProps = {
                token,
                userId: Number(action?.meta?.arg)
            };
            state.loading = false;
            authenticate(state, data, action?.meta?.arg);
        })
        builder.addCase(login.pending, (state: AuthInitialProps) => {
            state.loading = true;
        })
        builder.addCase(login.rejected, (state: AuthInitialProps, action) => {
            state.loading = false;
            console.error(action);
        })
        builder.addCase(getUserMe.fulfilled, (state: AuthInitialProps, action) => {
            state.loading = false
            state.user = action.payload
        })
        builder.addCase(getUserMe.rejected, (state: AuthInitialProps, action) => {
            state.loading = false
            console.error(action.payload)
        })
    }
})

export const {setAuth} = authSlice.actions;
export default authSlice.reducer