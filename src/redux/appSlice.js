import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        platformCategory: '',
        searchKeyword: ''
    },
    reducers: {
        setPlatformCategory: (state, action) => {
            state.platformCategory = action.payload;
        },
        setSearchKeyword: (state, action) => {
            state.searchKeyword = action.payload;
        }
    }
});

export const { setPlatformCategory, setSearchKeyword } = appSlice.actions;
export default appSlice.reducer;
