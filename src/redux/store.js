import { configureStore } from '@reduxjs/toolkit';
import adsReducer from './adsSlice';
import appReducer from './appSlice';

export default configureStore({
    reducer: {
        app: appReducer,
        ads: adsReducer
    }
});
