import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    articles: [],
};

export const blogSlice = createSlice({ 
    name: 'blog',
    initialState,
    reducers: {
        setArticles: (state, action) => {
            state.articles = action.payload;
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