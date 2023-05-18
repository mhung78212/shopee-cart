import { STATUS } from "@/utils/status";
import { BASE_URL } from "@/utils/apiURL";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
    productStatus: STATUS.IDLE,
    productSingle: [],
    productSingleStatus: STATUS.IDLE,
};
export const fetchProducts = createAsyncThunk(
    "product/fetch",
    async (limit) => {
        const response = await fetch(`${BASE_URL}products?limit=${limit}`);
        const data = await response.json();
        return data.products;
    },
);
export const fetchproductSingle = createAsyncThunk(
    "product-single/fetch",
    async (id) => {
        const response = await fetch(`${BASE_URL}products/${id}`);
        const data = await response.json();
        return data;
    },
);

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.productStatus = STATUS.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.productStatus = STATUS.SUCCEEDED;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.productStatus = STATUS.FAILED;
            })
            .addCase(fetchproductSingle.pending, (state) => {
                state.productSingleStatus = STATUS.LOADING;
            })
            .addCase(fetchproductSingle.fulfilled, (state, action) => {
                state.productSingle = action.payload;
                state.productSingleStatus = STATUS.SUCCEEDED;   
            })
            .addCase(fetchproductSingle.rejected, (state) => {
                state.productSingleStatus = STATUS.FAILED;
            });
    },
});

export const getAllProducts = (state) => state.product.products;
export const getAllProductsStatus = (state) => state.product.productsStatus;
export const getProductSingle = (state) => state.product.productSingle;
export const getSingleProductStatus = (state) =>
    state.product.productSingleStatus;

export default productSlice.reducer;
