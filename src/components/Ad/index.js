import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAdsData } from '../../redux/adsSlice';

import AdCategoryTab from './AdCategoryTab';
import AdSearch from './AdSearch';
import AdList from './AdList';

const Ad = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.ads);

    useEffect(() => {
        dispatch(fetchAdsData());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div> Error: {error}</div>;

    return (
        <div className='m-auto px-8 w-full max-w-6xl'>
            <h1 className='my-4 md:my-6 lg:my-8 text-4xl font-bold text-gray-400 md:text-4xl lg:text-5xl'>Ad List</h1>
            <AdCategoryTab />
            <AdSearch />
            <AdList />
        </div>
    );
};

export default Ad;
