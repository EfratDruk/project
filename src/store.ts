import { configureStore } from "@reduxjs/toolkit";
import matchmakerReducer from "./redux/features/matchmakerSlice";
export const store=configureStore(
    {reducer:{
        matchmaker: matchmakerReducer,

    }}
)

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;