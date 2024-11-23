import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Man } from "../../models/man";
import { createMan, deleteMan, getMan, getManById, updateMan } from "../services/manService";

interface ManState {
    men: Man[];
    selectedMan?: Man;
    error: string;
}

const initialState: ManState = {
    men: [],
    selectedMan: undefined,
    error: '',
};



export const fetchMan = createAsyncThunk<Man[]>(
    'man/fetchMan',
    async () => {
        const men = await getMan();
        return men;
    }
)

export const fetchManById = createAsyncThunk<Man, number>(
    'man/fetchManById',
    async (id: number) => {
        const man = await getManById(id);
        return man;
    }
)

export const createNewMan = createAsyncThunk(
    'man/createMan',
    async (man: Man) => {
        return await createMan(man)
    }
);

export const updateExistingMan: any = createAsyncThunk(
    'man/updateMan',
    async (manUpdate: { id: number, man: Man }) => {
        return await updateMan(manUpdate.id, manUpdate.man)
    }
);


export const deleteExistingMan = createAsyncThunk(
    'man/deleteMan',
    async (id: number) => {
        await deleteMan(id);
        return id;
    }
);


const manSlice = createSlice({
    name: 'man',
    initialState,
    reducers: {},
    extraReducers: (builder: { addCase: (arg0: any, arg1: { (atate: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; }) => void; }) => {

        builder.addCase(fetchMan.fulfilled, (state: { men: any; }, action: { payload: any; }) => {
            state.men = action.payload;
        });
        builder.addCase(fetchMan.rejected, (state: { error: any; }, action: { error: { message: string; }; }) => {
            state.error = action.error.message || 'failes to fetch man';
        });
        builder.addCase(fetchManById.fulfilled, (state: { selectedMan: any; }, action: { payload: any; }) => {
            state.selectedMan = action.payload;
        });
        builder.addCase(fetchManById.rejected, (state: { error: any; }, action: { error: { message: string; }; }) => {
            state.error = action.error.message || 'Failed to fetch matchmaker';
        });
        builder.addCase(createNewMan.fulfilled, (state: { men: any[]; }, action: { payload: any; }) => {
            state.men.push(action.payload);
        });
        builder.addCase(createNewMan.rejected, (state: { error: any; }, action: { error: { message: string; }; }) => {
            state.error = action.error.message || 'faild to create new matchmaker';
        });
        builder.addCase(updateExistingMan.fulfilled, (state: { men: any[] }, action: { payload: { id: number }; }) => {
            const index = state.men.findIndex((m: { id: any; }) => m.id === action.payload.id);
            if (index !== -1) {
                state.men[index] = action.payload;
            }
        });
        builder.addCase(updateExistingMan.rejected, (state: { error: any }, action: { error: { message: String; }; }) => {
            state.error = action.error.message || 'failed tiupdate '
        })
        builder.addCase(deleteExistingMan.fulfilled, (state: { men: any[]; }, action: { payload: any; }) => {
            state.men = state.men.filter((m: { manId: any }) => m.manId !== action.payload);
        });
        builder.addCase(deleteExistingMan.rejected, (state: { error: any; }, action: { error: { message: string; }; }) => {
            state.error = action.error.message || 'failed to delete matchmaker'
        });
    }
});

export default manSlice.reducer;




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

