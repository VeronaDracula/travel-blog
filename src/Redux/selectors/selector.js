import { createSelector } from "@reduxjs/toolkit";

const data = (state) => state?.blog?.articles || [];

export const getArrayBlogList = createSelector(
    [data], (data) => data
)
