import { configureStore } from '@reduxjs/toolkit';
import adsReducer from './adsSlice';

export default configureStore({
    reducer: {
        ads: adsReducer
    }
});
