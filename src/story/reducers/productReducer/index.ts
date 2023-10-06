/* eslint-disable prettier/prettier */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../../../shared/types/productType';
interface ProductStore {
    products: ProductType[];
}
const initialState: ProductStore = {
  products: [],
}
export const ProductSlice = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProductsAction } = ProductSlice.actions;

export default ProductSlice.reducer;
