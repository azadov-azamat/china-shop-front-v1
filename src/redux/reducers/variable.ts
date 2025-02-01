import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {InitialStateProps} from "../../interface/redux/variable.interface";

import {http} from "../../config/api.ts";
import {UrlParamsDataProps} from "../../interface/search/search.interface.ts";

export const getNotifications = createAsyncThunk('variables/getNotifications', async (_, {rejectWithValue}) => {
    try {
        const response = await http.get(`/notifications`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const getProducts = createAsyncThunk('variables/getProducts', async (data: UrlParamsDataProps, {rejectWithValue}) => {
    try {
        const response = await http.get(`/products`, {
            params: data
        })
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const getProductById = createAsyncThunk('variables/getProductById', async (id: string, {rejectWithValue}) => {
    try {
        const response = await http.get(`/products/${id}`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const getOrders = createAsyncThunk('variables/getOrders', async (_, {rejectWithValue}) => {
    try {
        const response = await http.get(`/order`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const getCategories = createAsyncThunk('variables/getCategories', async (_, {rejectWithValue}) => {
    try {
        const response = await http.get(`/categories`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

const initialState: InitialStateProps = {
    products: [],
    carts: [],
    product: null,
    subscribeLoading: false,
    loading: false,
    currentPage: 1,
    pageCount: 1,
    totalCount: 0,
    limit: 10
}

const reducers = {}

export const variableSlice = createSlice({
    name: 'variable',
    initialState,
    reducers: reducers,
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state: InitialStateProps, action) => {
            state.products = action.payload
            state.loading = false;
        })
        builder.addCase(getProducts.pending, (state: InitialStateProps) => {
            state.loading = true;
        })
        builder.addCase(getProducts.rejected, (state: InitialStateProps, action) => {
            console.error(action.payload)
            state.products = []
            state.loading = true;
        })

        builder.addCase(getProductById.fulfilled, (state: InitialStateProps, action) => {
            state.product = action.payload
            state.loading = false;
        })
        builder.addCase(getProductById.pending, (state: InitialStateProps) => {
            state.loading = true;
        })
        builder.addCase(getProductById.rejected, (state: InitialStateProps, action) => {
            console.error(action.payload)
            state.product = null
            state.loading = true;
        })
    }
})

export const {} = variableSlice.actions;
export default variableSlice.reducer