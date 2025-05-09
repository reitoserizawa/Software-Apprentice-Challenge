import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        platform: '',
        searchKeyword: '',
        sortOption: ''
    },
    reducers: {
        setPlatform: (state, action) => {
            state.platform = action.payload;
        },
        setSearchKeyword: (state, action) => {
            state.searchKeyword = action.payload;
        },
        setSortOption: (state, action) => {
            state.sortOption = action.payload;
        }
    }
});

export const { setPlatform, setSearchKeyword, setSortOption } = appSlice.actions;
export default appSlice.reducer;
