import {createSlice} from "@reduxjs/toolkit";
import {InitialStateProps} from "../../interface/redux/variable.interface";

import img from '../../assets/draft/img.png';
import img1 from '../../assets/draft/img_1.png';
import img2 from '../../assets/draft/img_2.png';
import img3 from '../../assets/draft/img_3.png';
import img4 from '../../assets/draft/img_4.png';
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
    products: [
        {
            id: 1,
            image: img,
            name: 'Pink Hoodie',
            price: 40,
            rating: 3,
            brand: 'Geeta Mens',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aperiam beatae consectetur delectus deleniti dolores ducimus earum eos error eum eveniet in incidunt inventore necessitatibus obcaecati, officia provident quasi qui quibusdam quisquam quos recusandae temporibus voluptatibus. Aut illum praesentium quidem quos, vero voluptates.",
            availableColors: ['Purple', 'Black', 'Gray'], // Mavjud ranglar
            sizes: ['S', 'M', 'L', 'XL', 'XXL'], // Mavjud o'lchamlar
            selectedSize: 'S', // Hozirgi tanlangan o'lcham
            stockQuantity: 6, // Umumiy miqdor
        },
        {
            id: 2,
            image: img1,
            rating: 3.5,
            brand: 'Geeta Mens',
            name: 'Leather Jacket',
            price: 48,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aperiam beatae consectetur delectus deleniti dolores ducimus earum eos error eum eveniet in incidunt inventore necessitatibus obcaecati, officia provident quasi qui quibusdam quisquam quos recusandae temporibus voluptatibus. Aut illum praesentium quidem quos, vero voluptates.",
            availableColors: ['Red', 'Blue'], // Mavjud ranglar
            sizes: ['M', 'L', 'XL'], // Mavjud o'lchamlar
            selectedSize: 'M', // Hozirgi tanlangan o'lcham
            stockQuantity: 50, // Umumiy miqdor
        },
        {
            id: 3,
            image: img2,
            rating: 4,
            brand: 'Geeta Mens',
            name: 'Washed Blue Jeans',
            price: 36,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aperiam beatae consectetur delectus deleniti dolores ducimus earum eos error eum eveniet in incidunt inventore necessitatibus obcaecati, officia provident quasi qui quibusdam quisquam quos recusandae temporibus voluptatibus. Aut illum praesentium quidem quos, vero voluptates.",
            availableColors: ['Green', 'Yellow'], // Mavjud ranglar
            sizes: ['S', 'L', 'XXL'], // Mavjud o'lchamlar
            selectedSize: 'L', // Hozirgi tanlangan o'lcham
            stockQuantity: 80, // Umumiy miqdor
        },
        {
            id: 4,
            image: img3,
            rating: 5,
            brand: 'Geeta Mens',
            name: 'Printed Shirt',
            price: 28,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aperiam beatae consectetur delectus deleniti dolores ducimus earum eos error eum eveniet in incidunt inventore necessitatibus obcaecati, officia provident quasi qui quibusdam quisquam quos recusandae temporibus voluptatibus. Aut illum praesentium quidem quos, vero voluptates.",
            availableColors: ['Black', 'White'], // Mavjud ranglar
            sizes: ['S', 'M', 'XL', 'XXL'], // Mavjud o'lchamlar
            selectedSize: 'M', // Hozirgi tanlangan o'lcham
            stockQuantity: 120, // Umumiy miqdor
        },
        {
            id: 5,
            image: img4,
            rating: 4.5,
            brand: 'Geeta Mens',
            name: 'Printed Shirt',
            price: 28,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aperiam beatae consectetur delectus deleniti dolores ducimus earum eos error eum eveniet in incidunt inventore necessitatibus obcaecati, officia provident quasi qui quibusdam quisquam quos recusandae temporibus voluptatibus. Aut illum praesentium quidem quos, vero voluptates.",
            availableColors: ['Red', 'Blue'], // Mavjud ranglar
            sizes: ['M', 'L', 'XL'], // Mavjud o'lchamlar
            selectedSize: 'M', // Hozirgi tanlangan o'lcham
            stockQuantity: 50, // Umumiy miqdor
        },
    ],
    carts: [
        {
            id: 1,
            image: img,
            name: 'Pink Hoodie',
            price: 40,
            rating: 3,
            quantity: 3,
            brand: 'Geeta Mens',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aperiam beatae consectetur delectus deleniti dolores ducimus earum eos error eum eveniet in incidunt inventore necessitatibus obcaecati, officia provident quasi qui quibusdam quisquam quos recusandae temporibus voluptatibus. Aut illum praesentium quidem quos, vero voluptates.",
            availableColors: ['Purple', 'Black', 'Gray'], // Mavjud ranglar
            sizes: ['S', 'M', 'L', 'XL', 'XXL'], // Mavjud o'lchamlar
            selectedSize: 'S', // Hozirgi tanlangan o'lcham
            stockQuantity: 6, // Umumiy miqdor
        },
        {
            id: 2,
            image: img1,
            rating: 3.5,
            quantity: 3,
            brand: 'Geeta Mens',
            name: 'Leather Jacket',
            price: 48,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aperiam beatae consectetur delectus deleniti dolores ducimus earum eos error eum eveniet in incidunt inventore necessitatibus obcaecati, officia provident quasi qui quibusdam quisquam quos recusandae temporibus voluptatibus. Aut illum praesentium quidem quos, vero voluptates.",
            availableColors: ['Red', 'Blue'], // Mavjud ranglar
            sizes: ['M', 'L', 'XL'], // Mavjud o'lchamlar
            selectedSize: 'M', // Hozirgi tanlangan o'lcham
            stockQuantity: 50, // Umumiy miqdor
        },
        {
            id: 3,
            image: img2,
            rating: 4,
            quantity: 3,
            brand: 'Geeta Mens',
            name: 'Washed Blue Jeans',
            price: 36,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aperiam beatae consectetur delectus deleniti dolores ducimus earum eos error eum eveniet in incidunt inventore necessitatibus obcaecati, officia provident quasi qui quibusdam quisquam quos recusandae temporibus voluptatibus. Aut illum praesentium quidem quos, vero voluptates.",
            availableColors: ['Green', 'Yellow'], // Mavjud ranglar
            sizes: ['S', 'L', 'XXL'], // Mavjud o'lchamlar
            selectedSize: 'L', // Hozirgi tanlangan o'lcham
            stockQuantity: 80, // Umumiy miqdor
        },
        {
            id: 4,
            image: img3,
            rating: 5,
            quantity: 3,
            brand: 'Geeta Mens',
            name: 'Printed Shirt',
            price: 28,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aperiam beatae consectetur delectus deleniti dolores ducimus earum eos error eum eveniet in incidunt inventore necessitatibus obcaecati, officia provident quasi qui quibusdam quisquam quos recusandae temporibus voluptatibus. Aut illum praesentium quidem quos, vero voluptates.",
            availableColors: ['Black', 'White'], // Mavjud ranglar
            sizes: ['S', 'M', 'XL', 'XXL'], // Mavjud o'lchamlar
            selectedSize: 'M', // Hozirgi tanlangan o'lcham
            stockQuantity: 120, // Umumiy miqdor
        },
        {
            id: 5,
            quantity: 3,
            image: img4,
            rating: 4.5,
            brand: 'Geeta Mens',
            name: 'Printed Shirt',
            price: 28,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aperiam beatae consectetur delectus deleniti dolores ducimus earum eos error eum eveniet in incidunt inventore necessitatibus obcaecati, officia provident quasi qui quibusdam quisquam quos recusandae temporibus voluptatibus. Aut illum praesentium quidem quos, vero voluptates.",
            availableColors: ['Red', 'Blue'], // Mavjud ranglar
            sizes: ['M', 'L', 'XL'], // Mavjud o'lchamlar
            selectedSize: 'M', // Hozirgi tanlangan o'lcham
            stockQuantity: 50, // Umumiy miqdor
        },
    ],
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
    // extraReducers: (builder) => {
        // builder.addCase(getSazusData.fulfilled, (state: InitialStateProps, action) => {
        //     state.projects = action.payload
        // })
        // builder.addCase(getSazusData.rejected, (state: InitialStateProps, action) => {
        //     state.projects = []
        //     // @ts-ignore
        //     console.error(action.payload.message)
        // })
    // }
})

export const {

} = variableSlice.actions;
export default variableSlice.reducer