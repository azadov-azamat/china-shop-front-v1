import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {http} from "../../config/api.ts";
import {BucketInitialStateProps, bucketProps} from "../../interface/redux/bucket.interface.ts";

export const getBuckets = createAsyncThunk('bucket/getBuckets', async (_, {rejectWithValue}) => {
    try {
        const response = await http.get(`/order/active/`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const getBucketCount = createAsyncThunk('bucket/getCount', async (_, {rejectWithValue}) => {
    try {
        const response = await http.get(`/buckets/count`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const createBuckets = createAsyncThunk('bucket/createBuckets', async (data: bucketProps, {rejectWithValue}) => {
    try {
        const response = await http.post(`/order/add/`, data)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const updateBuckets = createAsyncThunk('bucket/updateBuckets', async (data: bucketProps, {rejectWithValue}) => {
    try {
        const response = await http.post(`/order/add/`, data)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const deleteBuckets = createAsyncThunk('bucket/deleteBuckets', async (id: number, {rejectWithValue}) => {
    try {
        const response = await http.delete(`/order/remove/${id}`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

const initialState: BucketInitialStateProps = {
    buckets: null,
    bucket: null,
    loading: false,
    currentPage: 1,
    pageCount: 1,
    totalCount: 0,
    limit: 10
}

const reducers = {}

export const bucketSlice = createSlice({
    name: 'bucket',
    initialState,
    reducers: reducers,
    extraReducers: (builder) => {
        builder.addCase(getBuckets.fulfilled, (state: BucketInitialStateProps, action) => {
            state.buckets = action.payload
            state.loading = false;
        })
        builder.addCase(getBuckets.pending, (state: BucketInitialStateProps) => {
            state.loading = true;
        })
        builder.addCase(getBuckets.rejected, (state: BucketInitialStateProps, action) => {
            console.error(action.payload)
            state.buckets = null
            state.loading = true;
        })

        builder.addCase(createBuckets.fulfilled, (state: BucketInitialStateProps) => {
            state.loading = false;
        })
        builder.addCase(createBuckets.pending, (state: BucketInitialStateProps) => {
            state.loading = true;
        })
        builder.addCase(createBuckets.rejected, (state: BucketInitialStateProps, action) => {
            console.error(action.payload)
            state.loading = true;
        })

        builder.addCase(updateBuckets.fulfilled, (state: BucketInitialStateProps, action) => {
            const updatedItem = action.payload;
            if (state.buckets?.order?.items) {
                const itemIndex = state.buckets.order.items.findIndex(
                    (item) => item.order_item_id === updatedItem.order_item_id
                );
    
                if (itemIndex !== -1) {
                    state.buckets.order.items[itemIndex] = updatedItem;
                    state.buckets.order.total_price = updatedItem.total_price
                }
            }
            state.loading = false;
        })
        builder.addCase(updateBuckets.pending, (state: BucketInitialStateProps) => {
            state.loading = true;
        })
        builder.addCase(updateBuckets.rejected, (state: BucketInitialStateProps, action) => {
            console.error(action.payload)
            state.loading = true;
        })

        builder.addCase(deleteBuckets.fulfilled, (state: BucketInitialStateProps, action) => {
            const orderItemId = action.payload;

            if (state.buckets?.order?.items) {
                state.buckets.order.items = state.buckets.order.items.filter(
                    (item) => item.order_item_id !== orderItemId
                );
            }
            state.loading = false;
        })
        builder.addCase(deleteBuckets.pending, (state: BucketInitialStateProps) => {
            state.loading = true;
        })
        builder.addCase(deleteBuckets.rejected, (state: BucketInitialStateProps, action) => {
            console.error(action.payload)
            state.loading = true;
        })

        builder.addCase(getBucketCount.fulfilled, (state: BucketInitialStateProps, action) => {
            state.totalCount = action.payload.count
        })
    }
})

export const {} = bucketSlice.actions;
export default bucketSlice.reducer