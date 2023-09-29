# Redux Toolkit (Step-by-step)

1. Differences between redux, react-redux and redux-toolkit. RTK is the most advanced, and automatically handles a lot of the manual setup

2. Store : Single source of truth(configureStore, reducer parameter tells where all the reducers are defined )

3. Features/Slice : createSlice(contains name, initial state, and reducers to be defined in the form of key-fn pairs )

4. (State, action) - state refers to the variable/dataset in its current form, whihc needs to be modified. Action refers to how this modification needs to happen, contains action.payload for this

5. useDispatch() - used to use a reducer to make changes to any state in the redux store

6. useSelector((state)=> {}) - used to select a certain state and return it
