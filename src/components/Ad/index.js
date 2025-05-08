import React from 'react';

import AdCategoryTab from './AdCategoryTab';
import AdSearch from './AdSearch';
import AdList from './AdList';

const Ad = () => {
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
