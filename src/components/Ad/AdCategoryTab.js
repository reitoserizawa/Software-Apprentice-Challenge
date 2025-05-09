import React from 'react';
import { useDispatch } from 'react-redux';
import { setPlatform } from '../../redux/appSlice';

const tabOptions = [
    { label: 'All', value: '' },
    { label: 'Facebook', value: 'facebook' },
    { label: 'Twitter', value: 'twitter' },
    { label: 'Snapchat', value: 'snapchat' }
    // { label: 'Google', value: 'google_analytics' }
];

const AdCategoryTab = () => {
    const dispatch = useDispatch();

    return (
        <ul className='flex flex-wrap text-sm font-medium text-center text-gray-400 border-y'>
            {tabOptions.map((tab, idx) => (
                <li key={idx} className='inline-block p-4 hover:bg-gray-100' value={tab.value} onClick={() => dispatch(setPlatform(tab.value))}>
                    {tab.label}
                </li>
            ))}
        </ul>
    );
};

export default AdCategoryTab;
