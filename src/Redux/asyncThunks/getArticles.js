import { createAsyncThunk } from "@reduxjs/toolkit";
import { blogActions } from "../slice/slice";

export const getArticles = createAsyncThunk(
    'blog/getArticles',
    async(_,ThunkApi) => {
        try {

            const url = 'http://localhost:3004/articles';

            const response = await fetch(url);

            const data = await response.json();

            console.log(data)

            if (data.length !== 0) {
                ThunkApi.dispatch(blogActions.setArticles(data));
            } else {
                ThunkApi.rejectWithValue('Не найдено');
            }
        }
        catch (e) {
            console.log(e);
            return ThunkApi.rejectWithValue('Произошла непредвиденная ошибка');
        }
    }
)