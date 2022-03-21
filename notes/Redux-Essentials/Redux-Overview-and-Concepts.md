# Redux Overview and Concepts

## What is Redux

Redux is a pattern and library for managing and updating application state, using events called `actions`

It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

### When should I Use Redux?

Redux is more useful when:

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently over time
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people

<strong>Not all apps need Redux. Take some time to think about the kind of app you're building, and decide what tools would be best to help solve the problems you're working on.</strong>

### Redux Libraries and Tools

#### React-Redux

An offical package that lets your React components `interact` with a Redux store by reading pieces of state and dispatching actions to update the store.

#### Redux Toolkit

An offical recommended approach to `writting Redux logic`

#### Redux DevTools Extension

An tool shows a history of the changes to the state in your Redux store overtime
It helps debug effectively.
