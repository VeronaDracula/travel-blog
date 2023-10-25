import { configureStore } from '@reduxjs/toolkit';

import {blogReducer} from './Redux/slice/slice';


export const store = configureStore({
    reducer: {
        blog: blogReducer,
    },
})