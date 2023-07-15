import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const getAllProduct = createAsyncThunk("product", async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
  const allProducts = await response.json();
  return allProducts;
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, actions) => {
      state.products = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
