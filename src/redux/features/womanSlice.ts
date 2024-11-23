import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Woman } from "../../models/woman";
import { createWoman, deleteWoman, getWomanById, getWomen, updateWoman } from "../services/womanService";

interface WomanState {
    women: Woman[];
    selectedWoman?: Woman;
    error: string;
}

const initialState: WomanState = {
    women: [],
    selectedWoman: undefined,
    error: '',
};



export const fetchWoman = createAsyncThunk<Woman[]>(
    'women/fetchWomen',
    async () => {
        const women = await getWomen();
        return women;
    }
)

export const fetchWomanById = createAsyncThunk<Woman, number>(
    'women/fetchWomanById',
    async (id: number) => {
        const woman = await getWomanById(id);
        return woman;
    }
)

export const createNewWoman = createAsyncThunk(
    'women/createWoman',
    async (woman: Woman) => {
        return await createWoman(woman)
    }
);

export const updateExistingWoman: any= createAsyncThunk(
    'women/updateWoman',
    async (womanUpdate: { id: number, woman: Woman }) => {
        return await updateWoman(womanUpdate.id, womanUpdate.woman)
    }
);


export const deleteExistingWoman = createAsyncThunk(
    'women/deleteWoman',
    async (id: number) => {
        await deleteWoman(id);
        return id;
    }
);


const womanSlice = createSlice({
    name: 'women',
    initialState,
    reducers: {},
    extraReducers: (builder: { addCase: (arg0: any, arg1: { (atate: any, action: any): void; (state: any, action: any): void;  (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; }) => void; }) => {

        builder.addCase(fetchWoman.fulfilled, (state: { women: any; }, action: { payload: any; }) => {
            state.women = action.payload;
        });
        builder.addCase(fetchWoman.rejected, (state: { error: any; }, action: { error: { message: string; }; }) => {
            state.error = action.error.message || 'failes to fetch woman';
        });
        builder.addCase(fetchWomanById.fulfilled, (state: { selectedWoman: any; }, action: { payload: any; }) => {
            state.selectedWoman = action.payload;
        });
        builder.addCase(fetchWomanById.rejected, (state: { error: any; }, action: { error: { message: string; }; }) => {
            state.error = action.error.message || 'Failed to fetch woman';
        });
        builder.addCase(createNewWoman.fulfilled, (state: { women: any[]; }, action: { payload: any; }) => {
            state.women.push(action.payload);
        });
        builder.addCase(createNewWoman.rejected, (state: { error: any; }, action: { error: { message: string; }; }) => {
            state.error = action.error.message || 'faild to create new woman';
        });
        builder.addCase(updateExistingWoman.fulfilled, (state:{women:any[]}, action: { payload: { id: number}; }) => {
            const index = state.women.findIndex((w: { id: any; }) => w.id === action.payload.id);            
            if (index !== -1) {
                state.women[index] = action.payload;
            }
        });
        builder.addCase(updateExistingWoman.rejected, (state: { error: any }, action: { error: { message: String; }; }) => {
            state.error = action.error.message || 'failed to update woman'
        })
        builder.addCase(deleteExistingWoman.fulfilled, (state: { women: any[]; }, action: { payload: any; }) => {
            state.women = state.women.filter((w: { womanId: any }) => w.womanId !== action.payload);
        });
        builder.addCase(deleteExistingWoman.rejected, (state: { error: any; }, action: { error: { message: string; }; }) => {
            state.error = action.error.message || 'failed to delete woman'
        });
    }
        });

export default womanSlice.reducer;




// of teacer////////////////-----------------
// export const matchmakerSlice= createSlice({
//     name:'matchmaker',
//     initialState,
//     reducers:{
//         addMatchmaker:(state, action)=>{
//             state.matchmakers.push(action.payload);
//         }

//     }

// })

// export const{addMatchmaker}=matchmakerSlice.actions;
// export default matchmakerSlice.reducer

