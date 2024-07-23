import {configureStore, createSlice} from '@reduxjs/toolkit'

const bagSlice = createSlice(
    {
        name: 'bag',
        initialState: [],
        reducers:{
            addToBag: (state,action)=>{
                state.push(action.payload)
                console.log(state,action)
            },
            removeFromBag:(state,action)=>{
                return state.filter(itemsId => itemsId !== action.payload)
                console.log(state,action)
            },
            
        }
    }
)

export const bagsliceaction = bagSlice.actions;
export default bagSlice;

