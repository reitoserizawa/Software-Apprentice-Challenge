import React from 'react';

const AdCategoryTab = () => {
    return (
        <ul className='flex flex-wrap text-sm font-medium text-center text-gray-400 border-y'>
            <li className='inline-block p-4 hover:bg-gray-100'>All</li>
            <li className='inline-block p-4 hover:bg-gray-100'>Facebook</li>
            <li className='inline-block p-4 hover:bg-gray-100'>Twitter</li>
            <li className='inline-block p-4 hover:bg-gray-100'>Snapchat</li>
            <li className='inline-block p-4 hover:bg-gray-100'>Google</li>
        </ul>
    );
};

export default AdCategoryTab;
