import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import normalizeAdsData from '../utils/normalizeAds';

export const fetchAdsData = createAsyncThunk('ads/fetchData', async () => {
    const response = await fetch(process.env.REACT_APP_API_URL);
    const data = await response.json();
    const normalizedAds = normalizeAdsData(data);

    return normalizedAds;
});

const adsSlice = createSlice({
    name: 'ads',
    initialState: {
        ads: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchAdsData.pending, state => {
                state.loading = true;
            })
            .addCase(fetchAdsData.fulfilled, (state, action) => {
                state.loading = false;
                state.ads = action.payload;
            })
            .addCase(fetchAdsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action?.error?.message || 'Unknown error occured';
            });
    }
});

export default adsSlice.reducer;
