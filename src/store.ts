import { configureStore } from "@reduxjs/toolkit";
import matchmakerReducer from "./redux/features/matchmakerSlice";
import userReducer from "./redux/features/userSlice";
import womanReducer from "./redux/features/womanSlice";
import manReducer from "./redux/features/manSlice";

export const store=configureStore(
    {reducer:{
        matchmaker: matchmakerReducer,
        user:userReducer,
        woman:womanReducer,
        men:manReducer,
    }}
)

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;