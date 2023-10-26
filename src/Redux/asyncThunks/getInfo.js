import { createAsyncThunk } from "@reduxjs/toolkit";
import { blogActions } from "../slice/slice";
import {getObjectInfo} from '../helpers/getObjectTest';

export const getInfo = createAsyncThunk(
    'blog/getInfo',
    async(_,ThunkApi) => {
        try {

            const url = 'http://localhost:3004/info';

            const response = await fetch(url);

            const data = await response.json();

            // console.log(data)

            if (data.length !== 0) {
                ThunkApi.dispatch(blogActions.setInfo(getObjectInfo(data)));
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