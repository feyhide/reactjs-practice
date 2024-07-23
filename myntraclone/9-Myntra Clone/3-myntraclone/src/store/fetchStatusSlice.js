import {configureStore, createSlice} from '@reduxjs/toolkit'

const fetchStatusSlice = createSlice(
    {
        name: 'fetchStatus',
        initialState: {
            fetchDone: false,
            currentlyFetching: false,
        },
        reducers:{
            FetchDone: (state)=>{
                state.fetchDone = true;
                return state;
            },
            Fetching: (state)=>{
                state.currentlyFetching = true;
                return state;
            },
            FetchingDone: (state)=>{
                state.currentlyFetching = false;
                return state;
            }
        }
    }
)

export const fetchStatusSliceAction = fetchStatusSlice.actions;
export default fetchStatusSlice;

