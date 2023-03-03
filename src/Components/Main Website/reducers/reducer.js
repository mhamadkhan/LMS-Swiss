
import { createSlice } from '@reduxjs/toolkit';

export const loginReducer = createSlice({
    name: 'GlobalState',
    initialState: {
        loading: "loading"
    },
    reducers: {
        USER_LOGGED_IN(state, { payload }) {

        },
        USER_LOGGED_OUT(state, { payload }) {

        },
    }
});

export const { USER_LOGGED_IN, USER_LOGGED_OUT } = loginReducer.actions;
export default loginReducer.reducer;