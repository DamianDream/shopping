import { configureStore } from '@reduxjs/toolkit';

import categoriesSlice from './Categories/categoriesSlice';
import productsSlice from './Products/productsSlice';
import { apiSlice } from './api/apiSlice';
import userSlice from './user/userSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        user: userSlice,
        [ apiSlice.reducerPath ]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

