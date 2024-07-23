import { createStore } from "redux";

const initial_value = {
    counter: 0
}

const counterreducer = (store=initial_value, action) => {
  if(action.type === 'inc'){
    return {counter: store.counter+1};
  }else if(action.type === 'dec'){
    return {counter: store.counter-1};
  }
  return store;
};

const counterstore = createStore(counterreducer);

export default counterstore;