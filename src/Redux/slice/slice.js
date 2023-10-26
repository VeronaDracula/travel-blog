import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    info: {img: '', text: { text: '', symbols: 0, errorStatus: false}},
    articles: [],
    country: {
        name: '',
        text: '',
        img: '',
        cities: []
    }
};

export const blogSlice = createSlice({ 
    name: 'blog',
    initialState,
    reducers: {
        setInfo: (state, action) => {
            state.info = action.payload;
        },

        setArticles: (state, action) => {
            state.articles = action.payload;
        },

        setCountry: (state, action) => {
            state.country = action.payload;
        },


        editInfo: (state, action) => {
            if(action.payload.type === 'removeDataClose') {
                state.info = initialState.info;
                // localStorage.removeItem('testTaskData'); 
            }
            else {
                state.info[action.payload.type] = action.payload.value;
                // localStorage.setItem('testTaskData', JSON.stringify(state?.testData));
            }
        },

        // setTest: (state, action) => {
        // state.posts = [...action.payload]; 
        // },

        // deletePostSlice: (state, action) => {
        //     state.posts = state.posts.filter((item) => item.id !== action.payload);
        // },
    }, 
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(getCompanyInfo.pending, (state) => {
    //       state.isLoading = true;
    //     })
    //     .addCase(getCompanyInfo.fulfilled, (state) => {
    //       state.isLoading = false;
    //     })
    //     .addCase(getCompanyInfo.rejected, (state) => {
    //       state.isLoading = false;
    //     })
    // }
})

export const { actions: blogActions } = blogSlice;
export const { reducer: blogReducer } = blogSlice;

// export default testSlice.reducer