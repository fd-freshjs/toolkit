import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle', // idle || loading | error
  error: null,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // 'counter/increment'
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    incrementRequest: (state, action) => {
      state.status = 'loading';
    },
    incrementSuccess: (state, action) => {
      console.log(action.payload);
      state.status = 'idle';
      state.value += 1;
    },
    incrementError: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    }
  },
});

/* 

const counterReducer = (state = initialState, action) => {
  if (action.type === 'counter/increment') {
    const newState = { ...state };
    newState.value += 1;

    return newState;
  }

  return state;
}
*/

// action creators
// action.type === 'counter/...'
/* 
  const increment = (payload) => ({
    type: '.../...',
    payload,
  })
*/
export const { increment, decrement, incrementByAmount, incrementRequest, incrementSuccess, incrementError } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
