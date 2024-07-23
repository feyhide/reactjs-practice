import {configureStore, createSlice} from '@reduxjs/toolkit'

const itemsslice = createSlice(
    {
        name: 'items',
        initialState: [],
        reducers:{
            addInitialItems: (state,action)=>{
                return action.payload;
            }
        }
    }
)

export const itemsActions = itemsslice.actions;
export default itemsslice;

