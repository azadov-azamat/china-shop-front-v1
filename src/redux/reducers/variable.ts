import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {InitialStateProps} from "../../interface/redux/variable.interface";

import img from '../../assets/draft/img.png';
import img1 from '../../assets/draft/img_1.png';
import img2 from '../../assets/draft/img_2.png';
import img3 from '../../assets/draft/img_3.png';
import img4 from '../../assets/draft/img_4.png';
import {http} from "../../config/api.ts";
import {deserialize} from "../../utils/general.ts";

export const getCategories = createAsyncThunk('variables/getCategories', async (_, {rejectWithValue}) => {
    try {
        const response = await http.get(`/categories`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const getLikedProducts = createAsyncThunk('variables/getLikedProducts', async (_, {rejectWithValue}) => {
    try {
        const response = await http.get(`/liked-products`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const getNotifications = createAsyncThunk('variables/getNotifications', async (_, {rejectWithValue}) => {
    try {
        const response = await http.get(`/notifications`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const getProducts = createAsyncThunk('variables/getProducts', async (_, {rejectWithValue}) => {
    try {
        const response = await http.get(`/products`)
        if (response.data === null) return rejectWithValue(response?.data)
        return await deserialize(response.data)
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const getProductById = createAsyncThunk('variables/getProductById', async (id: string, {rejectWithValue}) => {
    try {
        const response = await http.get(`/product/${id}`)
        if (response.data === null) return rejectWithValue(response?.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const createLikedProduct = createAsyncThunk('variables/createLikedProduct', async (productId: string, {rejectWithValue}) => {
    try {
        const response = await http.post(`/products/like/${productId}`)
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

const initialState: InitialStateProps = {
    products: [],
    carts: [
        {
            id: 1,
            image: img,
            name: 'Pink Hoodie',
            price: 40,
            // rating: 3,
            quantity: 3,
            // brand: 'Geeta Mens',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aperiam beatae consectetur delectus deleniti dolores ducimus earum eos error eum eveniet in incidunt inventore necessitatibus obcaecati, officia provident quasi qui quibusdam quisquam quos recusandae temporibus voluptatibus. Aut illum praesentium quidem quos, vero voluptates.",
            availableColors: ['Purple', 'Black', 'Gray'], // Mavjud ranglar
            size: 'M',
            category: 1,
            count: 20,
            // sizes: ['S', 'M', 'L', 'XL', 'XXL'], // Mavjud o'lchamlar
            selectedSize: 'S', // Hozirgi tanlangan o'lcham
            stockQuantity: 6, // Umumiy miqdor
        },
        {
            id: 2,
            image: img1,
            quantity: 3,
            size: 'M',
            category: 1,
            count: 20,
            name: 'Leather Jacket',
            price: 48,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aperiam beatae consectetur delectus deleniti dolores ducimus earum eos error eum eveniet in incidunt inventore necessitatibus obcaecati, officia provident quasi qui quibusdam quisquam quos recusandae temporibus voluptatibus. Aut illum praesentium quidem quos, vero voluptates.",
            availableColors: ['Red', 'Blue'], // Mavjud ranglar
            // sizes: ['M', 'L', 'XL'], // Mavjud o'lchamlar
            selectedSize: 'M', // Hozirgi tanlangan o'lcham
            stockQuantity: 50, // Umumiy miqdor
        },
        {
            id: 3,
            image: img2,
            quantity: 3,
            size: 'M',
            category: 1,
            count: 20,
            name: 'Washed Blue Jeans',
            price: 36,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aperiam beatae consectetur delectus deleniti dolores ducimus earum eos error eum eveniet in incidunt inventore necessitatibus obcaecati, officia provident quasi qui quibusdam quisquam quos recusandae temporibus voluptatibus. Aut illum praesentium quidem quos, vero voluptates.",
            availableColors: ['Green', 'Yellow'], // Mavjud ranglar
            // sizes: ['S', 'L', 'XXL'], // Mavjud o'lchamlar
            selectedSize: 'L', // Hozirgi tanlangan o'lcham
            stockQuantity: 80, // Umumiy miqdor
        },
        {
            id: 4,
            image: img3,
            // rating: 5,
            quantity: 3,
            size: 'M',
            category: 1,
            count: 20,
            name: 'Printed Shirt',
            price: 28,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aperiam beatae consectetur delectus deleniti dolores ducimus earum eos error eum eveniet in incidunt inventore necessitatibus obcaecati, officia provident quasi qui quibusdam quisquam quos recusandae temporibus voluptatibus. Aut illum praesentium quidem quos, vero voluptates.",
            availableColors: ['Black', 'White'], // Mavjud ranglar
            // sizes: ['S', 'M', 'XL', 'XXL'], // Mavjud o'lchamlar
            selectedSize: 'M', // Hozirgi tanlangan o'lcham
            stockQuantity: 120, // Umumiy miqdor
        },
        {
            id: 5,
            quantity: 3,
            image: img4,
            size: 'M',
            category: 1,
            count: 20,
            name: 'Printed Shirt',
            price: 28,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aperiam beatae consectetur delectus deleniti dolores ducimus earum eos error eum eveniet in incidunt inventore necessitatibus obcaecati, officia provident quasi qui quibusdam quisquam quos recusandae temporibus voluptatibus. Aut illum praesentium quidem quos, vero voluptates.",
            availableColors: ['Red', 'Blue'], // Mavjud ranglar
            // sizes: ['M', 'L', 'XL'], // Mavjud o'lchamlar
            selectedSize: 'M', // Hozirgi tanlangan o'lcham
            stockQuantity: 50, // Umumiy miqdor
        },
    ],
    categories: [],
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
        builder.addCase(getCategories.fulfilled, (state: InitialStateProps, action) => {
            state.categories = action.payload
        })
        builder.addCase(getCategories.rejected, (state: InitialStateProps, action) => {
            state.categories = []
            console.error(action.payload)
        })
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
    }
})

export const {} = variableSlice.actions;
export default variableSlice.reducer