/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import BASE_URL from "../../utils/url";
import axios from "axios";

export const getCategories = createAsyncThunk(
        'categories/getCategories', 
        async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/categories`)
            return res.data
            
        } catch (error: any) {
            console.log(error);
            return thunkAPI.rejectWithValue({error: error.message})
        }
})

const initialState = {
    list: [] as Array<{ name: string, id: number }> | [],
    isLoading: false,
}

const modifyCategories = (array: string[]) => array
    .map((value: string, index: number) => ({ name: value, id: ++index }));

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {}, // Add an empty object for the reducers property
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCategories.fulfilled, (state, { payload }) => {
            state.list = modifyCategories(payload);
            state.isLoading = false;
        });
        builder.addCase(getCategories.rejected, (state) => {
            state.isLoading = false;
            console.error("Failed to get Products Categories");
        });
    },
})

export default categoriesSlice.reducer;
