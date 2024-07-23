import bagSlice from "./bagSlice"
import fetchStatusSlice from "./fetchStatusSlice"
import itemsslice from "./itemSlices"
import {configureStore, createSlice} from '@reduxjs/toolkit'

const myntraStore = configureStore({
    reducer:{
        items: itemsslice.reducer,
        fetchstatus: fetchStatusSlice.reducer,
        bag: bagSlice.reducer
    }
})


export default myntraStore