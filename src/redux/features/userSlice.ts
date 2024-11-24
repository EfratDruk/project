import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
 import {signIn} from '../services/userService.ts'
import { UserData } from "../../models/UserData.ts";
import { Man } from "@mui/icons-material";

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
        const password=user.data.password
        if(userData.password===password){
            const type=user.data.type;
            switch (type) {
                case 0:
                    // convert
                    // send to right page               
                    break;
                case 1:
                     // convert
                    // send to right page                                                           
                    break;
                case 2:
                    // convert
                    // send to right page                                                               
                        break;
                default:
                    break;
            }
            
           return user; 
        }
        else{
            console.log("wrong password");
        }
        
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