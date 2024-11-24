import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
 import {signIn} from '../services/userService.ts'
import { UserData } from "../../models/UserData.ts";
import { Man } from "@mui/icons-material";
import MatchmakerList from "../../components/matchmakerList.tsx";
import { BrowserRouter, Routes } from "react-router-dom";

interface userState{
    user:any;
    error:string;
}
const initialState:userState={
    user:'',
    error: '',
};

export const fetchSignIn=createAsyncThunk<any>(
    'user/signIn',
    async (userData:any) =>{
        const user=await signIn(userData.email)  
        console.log(typeof(user));
        switch (user.type) {
            case 'Matchmaker':
             
                break;
        
            default:
                break;
            }
            return user; 
        } 
)

const userSlice= createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers: (builder=>{
        builder
        .addCase(fetchSignIn.fulfilled,(state, action: PayloadAction<any>)=>{
            state.user=action.payload;
        })
        .addCase(fetchSignIn.rejected, (state, action)=>{
            state.error=action.error.message || 'failed'
        })
    })
})

export default userSlice.reducer;