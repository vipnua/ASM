import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { signin,signup } from '../api/auth';
import { IProduct } from '../interfaces/IProduct';
import { Users } from '../interfaces/Users';

export const fetchSignin = createAsyncThunk("auth/fetchsignin", async (data:Users)=>{
    return await signin(data);
});
export const fetchSignup = createAsyncThunk("auth/fetchsignup", async (data:Users)=>{
    return await signin(data);
});



const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth: false
    } as any,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSignin.fulfilled, (state, action) => {
          console.log('sigin thanh cong')
          //ko hieu sao bi loi 400 nen chua llam gi dc 
          state.isAuth = true;
        })
        builder.addCase(fetchSignup.fulfilled, (state, action) => {
            console.log('da dang nhap')
          })
    }
});


export default authSlice.reducer;