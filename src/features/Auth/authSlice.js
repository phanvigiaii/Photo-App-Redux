import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
    name: 'auth',
    initialState: false,
    reducers: {
        setSignedIn: (state, actions) => {
            return (state = actions.payload);
        },
    },
});

const { reducer, actions } = auth;
export const { setSignedIn } = actions;
export default reducer;
