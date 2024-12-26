import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {likeDataProps} from "../../interface/redux/like.interface";

import {http} from "../../config/api.ts";
import {deserialize} from "../../utils/general.ts";
import {UrlParamsDataProps} from "../../interface/search/search.interface.ts";
import {LikeInitialStateProps} from "../../interface/redux/like.interface.ts";

export const getLikes = createAsyncThunk('likes/getLikes', async (data: UrlParamsDataProps, {rejectWithValue}) => {
    try {
        const response = await http.get(`/likes`, {
            params: data
        })
        if (response.data === null) return rejectWithValue(response?.data)
        return await deserialize(response.data)
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const createLike = createAsyncThunk('likes/createLike', async (data: likeDataProps, {rejectWithValue}) => {
    try {
        const response = await http.post(`/likes`, data)
        if (response.data === null) return rejectWithValue(response?.data)
        return await deserialize(response.data)
    } catch (error) {
        return rejectWithValue(error)
    }
});

const initialState: LikeInitialStateProps = {
    likes: [],
    like: null,
    loading: false,
    currentPage: 1,
    pageCount: 1,
    totalCount: 0,
    limit: 10
}

const reducers = {}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: reducers,
    extraReducers: (builder) => {
        builder.addCase(getLikes.fulfilled, (state: LikeInitialStateProps, action) => {
            state.likes = action.payload
            state.loading = false;
        })
        builder.addCase(getLikes.pending, (state: LikeInitialStateProps) => {
            state.loading = true;
        })
        builder.addCase(getLikes.rejected, (state: LikeInitialStateProps, action) => {
            console.error(action.payload)
            state.likes = []
            state.loading = true;
        })
    }
})

export const {} = likeSlice.actions;
export default likeSlice.reducer