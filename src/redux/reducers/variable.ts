import {createSlice} from "@reduxjs/toolkit";
import {InitialStateProps} from "../../interface/redux/variable.interface";

// import {http} from "../../config/api.ts";
// import {toast} from "react-toastify";
// import i18n from "../../utils/i18n.ts";

// export const getCarouselData = createAsyncThunk('variables/getCarouselData', async (_, {rejectWithValue}) => {
//     try {
//         const response = await http.get(`/carusel`)
//         if (response.data === null) return rejectWithValue(response?.data)
//         return response.data
//     } catch (error) {
//         return rejectWithValue(error)
//     }
// });

const initialState: InitialStateProps = {
    currentNews: null,
    footer: null,
    about: null,
    carousels: [],
    contacts: null,
    projects: [],
    partners: [],
    news: [],
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
        // builder.addCase(getSazusData.fulfilled, (state: InitialStateProps, action) => {
        //     state.projects = action.payload
        // })
        // builder.addCase(getSazusData.rejected, (state: InitialStateProps, action) => {
        //     state.projects = []
        //     // @ts-ignore
        //     console.error(action.payload.message)
        // })
    }
})

export const {

} = variableSlice.actions;
export default variableSlice.reducer