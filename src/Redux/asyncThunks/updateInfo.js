import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, postOptions } from "../../conf";


export const updateInfo = createAsyncThunk(
    'blog/updateInfo',
    async( newData, ThunkApi) => {
    try { 
        console.log(newData)

        const url = 'http://localhost:3004/info';

        const response = await fetch(url, postOptions(JSON.stringify(newData)));

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