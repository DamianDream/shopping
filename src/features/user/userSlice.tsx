/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk("users/createUser", async (payload, thunkAPI) => {
	try {
		const res = await axios.post(`https://fakestoreapi.com/users`, payload);
		return res.data;
	} catch (err) {
		console.log(err);
		return thunkAPI.rejectWithValue(err);
	}
});

export const loginUser = createAsyncThunk("users/loginUser", async (payload, thunkAPI) => {
	try {
		const res = await axios.post(`https://fakestoreapi.com/auth/login`, payload);
		return res.data;
	} catch (err) {
		console.log(err);
		return thunkAPI.rejectWithValue(err);
	}
});


const addCurrentUser = (state: { currentUser: any }, { payload }: { payload: any }) => {
	console.log(payload);
	
	state.currentUser = payload;
};

const initialState = {
	currentUser: null,
	cart: [] as { id: string; payload: any; quantity: number }[],
	isLoading: false,
	formType: "signup",
	showForm: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addItemToCart: (state, { payload }) => {
			let newCart = [...state.cart];
			const found = state.cart.find(({ id }) => id === payload.id);

			if (found) {
				newCart = newCart.map((item) => {
					return item.id === payload.id ? { ...item, quantity: payload.quantity || item.quantity + 1 } : item;
				});
			} else newCart.push({ ...payload, quantity: 1 });

			state.cart = newCart;
		},
		toggleForm: (state, { payload }) => {
			state.showForm = payload;
		},
		toggleCurrentFormType: (state, { payload }) => {
			state.formType = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createUser.fulfilled, addCurrentUser);
		builder.addCase(loginUser.fulfilled, addCurrentUser);
	},
});

export const { addItemToCart, toggleForm, toggleCurrentFormType } = userSlice.actions;

export default userSlice.reducer;
