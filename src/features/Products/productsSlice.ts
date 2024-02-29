/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import BASE_URL from "../../utils/url";

interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }

export const getProducts = createAsyncThunk(
        'products/getProducts', 
        async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}`)
            return res.data
            
        } catch (error: any) {
            console.log(error);
            return thunkAPI.rejectWithValue({error: error.message})
        }
})

const initialState = {
    productsList: [] as Products[],
    filtered: [] as Products[],
    related: [] as Products[],
    isLoading: false,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    }, // Add an empty object for the reducers property
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.productsList = payload;
            state.isLoading = false;
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
            console.error("Failed to get Products");
        });
    },
})

export default productsSlice.reducer;
