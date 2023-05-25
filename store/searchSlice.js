import { STATUS } from "@/utils/status";
import { BASE_URL } from "@/utils/apiURL";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchProduct: [],
    searchProductStatus: STATUS.IDLE,
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        clearSearchInput: (state) => {
            state.searchProduct = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchProduct.pending, (state) => {
                state.searchProductStatus = STATUS.LOADING;
            })
            .addCase(fetchSearchProduct.fulfilled, (state, action) => {
                state.searchProduct = action.payload;
                state.searchProductStatus = STATUS.SUCCEEDED;
            })
            .addCase(fetchSearchProduct.rejected, (state) => {
                state.searchProductStatus = STATUS.FAILED;
            });
    },
});

export const fetchSearchProduct = createAsyncThunk(
    "searchProduct/fetch",
    async (searchInput) => {
        const response = await fetch(
            `${BASE_URL}products/search?q=${searchInput}`,
        );
        const data = await response.json();
        return data.products;
    },
);

export const { clearSearchInput } = searchSlice.actions;
export const getSearchProducts = (state) => state.search.searchProduct;
export const getSearchProductsStatus = (state) =>
    state.search.searchProductsStatus;
export default searchSlice.reducer;
