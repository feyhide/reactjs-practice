import { configureStore, createSlice } from "@reduxjs/toolkit";


// const initial_value = {
//     counter: 0
// }

const counterslice = createSlice({
  name: 'counter',
  initialState: {value:0},
  reducers: {
    inc: (state,action) => {
      state.value++;
    },
    dec: (state,action) => {
      state.value--;
    },
  }

})

// const counterreducer = (store=initial_value, action) => {
//   if(action.type === 'inc'){
//     return {counter: store.counter+1};
//   }else if(action.type === 'dec'){
//     return {counter: store.counter-1};
//   }
//   return store;
// };

const counterstore = configureStore({
  reducer: {
    counter: counterslice.reducer,
  }
});

export const counterActions = counterslice.actions
export default counterstore;