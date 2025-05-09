import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        platformCategory: '',
        searchKeyword: '',
        sortOption: ''
    },
    reducers: {
        setPlatformCategory: (state, action) => {
            state.platformCategory = action.payload;
        },
        setSearchKeyword: (state, action) => {
            state.searchKeyword = action.payload;
        },
        setSortOption: (state, action) => {
            state.sortOption = action.payload;
        }
    }
});

export const { setPlatformCategory, setSearchKeyword, setSortOption } = appSlice.actions;
export default appSlice.reducer;
