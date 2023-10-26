import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, putOptions } from "../../conf";


export const updateArticle = createAsyncThunk(
    'blog/updateArticle',
    async( newData, ThunkApi) => {
    try {
        console.log(newData)

        const url = `http://localhost:3004/articles/${newData.id}`;

        const response = await fetch(url, putOptions(JSON.stringify(newData)));

        const data = await response.json();

        if (data.status === 'success') {


        } else {
            ThunkApi.rejectWithValue('Не удалось обновить сопроводительное письмо');
        }

        return data
    }
    catch (e) {
        console.log(e);
        return ThunkApi.rejectWithValue('Произошла непредвиденная ошибка');
    }
    }
)
