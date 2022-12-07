import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getProduct, getProducts, removeProduct, updateProduct } from '../api/product';
import { IProduct } from '../interfaces/IProduct';

export const fetchProducts = createAsyncThunk("products/fetchProducts", getProducts);
export const fetchProduct = createAsyncThunk("products/fetchProduct", async (id: number) => {
    const product = await getProduct(id);
    return product;
});
export const fetchDeleteProduct = createAsyncThunk("products/fetchDeleteProduct",async(id:number)=>{
    await removeProduct(id);
    const product = await getProducts();
    return product;
})
export const fetchUpdateProduct = createAsyncThunk("products/fetchUpdateProduct",async(data:any)=>{
    await updateProduct(data);
    const product = await getProduct(data.id);
    return product;
})


const initialState: { value: IProduct[] } = {
    value: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
            state.value = action.payload;
        }),
        builder.addCase(fetchProduct.fulfilled,(state,action: PayloadAction<IProduct>)=>{
            state.value = action.payload;
        }),
        builder.addCase(fetchDeleteProduct.fulfilled, (state,action) => {
            state.value = action.payload       
        })
        builder.addCase(fetchUpdateProduct.fulfilled, (state,action) => {
           console.log('Api thành công') 
        })          
    }
});


export default productSlice.reducer;