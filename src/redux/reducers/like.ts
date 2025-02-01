import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import {likeDataProps} from "../../interface/redux/like.interface";

import {http} from "../../config/api.ts";
import {UrlParamsDataProps} from "../../interface/search/search.interface.ts";
import {LikeInitialStateProps} from "../../interface/redux/like.interface.ts";

export const getLikes = createAsyncThunk('likes/getLikes', async (data: UrlParamsDataProps, {rejectWithValue}) => {
    try {
        const response = await http.get(`/likes`, {
            params: data
        })
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const createOrRemoveLike = createAsyncThunk('likes/createOrRemoveLike', async (id: number, {rejectWithValue}) => {
    try {
        const response = await http.post(`/products/like/${id}/`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

const initialState: LikeInitialStateProps = {
    likes: [],
    like: false,
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
        builder.addCase(createOrRemoveLike.fulfilled, (state: LikeInitialStateProps, action) => {            
            state.like = action.payload?.liked
            state.loading = false;
        })
        builder.addCase(createOrRemoveLike.pending, (state: LikeInitialStateProps) => {
            state.loading = true;
        })
        builder.addCase(createOrRemoveLike.rejected, (state: LikeInitialStateProps, action) => {
            console.error(action.payload)
            state.like = false
            state.loading = true;
        })
    }
})

export const {} = likeSlice.actions;
export default likeSlice.reducer