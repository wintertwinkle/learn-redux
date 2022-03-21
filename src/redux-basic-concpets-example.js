import { createStore } from "@reduxjs/toolkit"

// This file demostrates the `basic concepts of Redux`.

// Store: database of states.
// Reducer: an encapsulation of action and state.
// Action: operation on state.
// subscriber: a function tells UI what to do when state changes.

/**
 * Reducer is a function which takes two paramenters, one is current state
 * and another is an action object (an action object describes "what happend").
 *
 * Reducer returns a new state value.
 *
 * A reudcer's function signature is: (state, action) => newState
 * @param {*} state
 * @param {*} action
 * @returns
 */
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 }
    case "counter/decremented":
      return { value: state.value - 1 }
    default:
      return state
  }
}

// Create a Redux store holding the stage of your app.
// Its API is { subscribe, dispatch, getState }
let store = createStore(counterReducer)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be addtional use cases where it's helpful to subscribe as well.
store.subscribe(
  // state change triggers this function
  () => console.log(store.getState())
)

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: "counter/incremented" }) // {value: 1}
store.dispatch({ type: "counter/incremented" }) // {value: 2}
store.dispatch({ type: "counter/decremented" }) // {value: 1}
