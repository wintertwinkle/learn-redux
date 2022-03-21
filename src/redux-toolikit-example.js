import { createSlice, configureStore } from "@reduxjs/toolkit"

/**
 * Redux Toolkit simplifies the process of writing Redux logic and setting up the store.
 *
 * Redux Toolkit allows us to write shoter logic that's easier to read, while still following
 * the same Redux behavior and data flow.
 */

// we use an option object to create a slice object
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: (state) => {
      state.value -= 1
    },
  },
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer,
})

// Can still subscibe to the store
store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us.
store.dispatch(incremented()) // {value: 1}
store.dispatch(incremented()) // {value: 2}
store.dispatch(decremented()) // {value: 1}
