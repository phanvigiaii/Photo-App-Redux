import { configureStore } from '@reduxjs/toolkit';
import photoReducer from 'features/Photo/photoSlice';
import authReducer from 'features/Auth/authSlice';

const rootReducer = {
    photos: photoReducer,
    user: authReducer,
};

export const store = configureStore({
    reducer: rootReducer,
});
