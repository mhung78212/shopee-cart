import { STATUS } from "@/utils/status";
import { BASE_URL } from "@/utils/apiURL";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    categoriesStatus: STATUS.IDLE,
    categoryProducts: [],
    categoryProductsStatus: STATUS.IDLE,
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.categoriesStatus = STATUS.LOADING;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.categoriesStatus = STATUS.SUCCEEDED;
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.categoriesStatus = STATUS.FAILED;
            })
            .addCase(fetchProductsOfCategory.pending, (state) => {
                state.categoryProductsStatus = STATUS.LOADING;
            })
            .addCase(fetchProductsOfCategory.fulfilled, (state, action) => {
                state.categoryProducts = action.payload;
                state.categoryProductsStatus = STATUS.SUCCEEDED;
            })
            .addCase(fetchProductsOfCategory.rejected, (state) => {
                state.categoryProductsStatus = STATUS.FAILED;
            });
    },
});

export const fetchCategories = createAsyncThunk(
    "categories/fetch",
    async () => {
        const response = await fetch(`${BASE_URL}products/categories`);
        const data = await response.json();
        return data;
    },
);
export const fetchProductsOfCategory = createAsyncThunk(
    "category-products/fetch",
    async (category) => {
        const response = await fetch(
            `${BASE_URL}products/category/${category}`,
        );
        const data = await response.json();
        return data.products;
    },
);

export const getAllCategories = (state) => state.category.categories;
export const getAllProductsByCategory = (state) =>
    state.category.categoryProducts;
export const getCategoryProductsStatus = (state) =>
    state.category.categoryProductsStatus;

export default categorySlice.reducer;
