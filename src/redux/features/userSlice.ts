import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signIn, signUp } from '../services/userService.ts'
import { UserData } from "../../models/UserData.ts";
import { Man } from "@mui/icons-material";
import MatchmakerList from "../../components/matchmakerList.tsx";
import { BrowserRouter, Routes } from "react-router-dom";
import { Users } from "../../models/users.ts";

interface userState {
    user?: Users;
    error: string;
}
const initialState: userState = {
    user: undefined,
    error: '',
};

export const fetchSignIn = createAsyncThunk<any, { userData: any; navigate: (path: string) => void }>(
    'user/signIn',
    async (userData: any) => {
        try {
            console.log("usreData", userData);
            const user = await signIn(userData.userData.email)
            console.log(userData.email);

            console.log(typeof (user));
            switch (user.type) {
                case 'MATCHMAKER':
                    userData.navigate("/MatchmakerList");
                    console.log("navigate");

                    break;
                case 'MAN': {
                    userData.navigate("/SignUp");
                }
                    break;
                case 'WOMAN':
                    userData.navigate("/SignUp");
                    break;

            }
            return user;
        } catch (error) {
            // return thunkAPI.rejectWithValue(error)
            console.log(error);

        }
    }
)

export const fetchSignUp = createAsyncThunk<any, Users>(
    'user/fetchsignUp',
    async (userData: Users) => {
        try {
            console.log("done", userData);
            const user = await signUp(userData)
            return user;
        } catch (error) {
            console.log("closed today");
            console.log(error);

        }
    }
)
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<Users>) => {
            if (!state.user) {
                state.user = {};
                console.log("in update");
                
            }
            state.user = { ...state.user, ...action.payload };
        }
    },
    extraReducers: (builder => {
        builder
            .addCase(fetchSignIn.fulfilled, (state, action: PayloadAction<any>) => {
                state.user = action.payload;
            })
            .addCase(fetchSignIn.rejected, (state, action) => {
                state.error = action.error.message || 'failed'
            })
            .addCase(fetchSignUp.fulfilled, (state, action: PayloadAction<any>) => {
                state.user = action.payload;
            })
            .addCase(fetchSignUp.rejected, (state, action) => {
                state.error = action.error.message || 'failed'
            })
    })
})

export const {updateUser}=userSlice.actions;
export default userSlice.reducer;