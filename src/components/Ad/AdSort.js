import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSortOption } from '../../redux/appSlice';

const sortOptions = [
    { label: 'Default', value: '' },
    { label: 'Spend: Low to High', value: 'asc' },
    { label: 'Spend: High to Low', value: 'desc' }
];

const AdSort = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const dispatch = useDispatch();
    const sortOption = useSelector(state => state.app.sortOption);

    const handleSort = value => {
        dispatch(setSortOption(value));
        setDropdownOpen(false);
    };

    return (
        <div className='relative'>
            <div className='mb-2 flex justify-end'>
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className='flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100'>
                    <span className='mr-1'>Sort by</span>
                    <span>↓</span>
                </button>
            </div>
            {dropdownOpen && (
                <div className='absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10'>
                    {sortOptions.map(option => (
                        <button key={option.value} onClick={() => handleSort(option.value)} className='w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between'>
                            {option.label}
                            {sortOption === option.value && <span>✔</span>}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdSort;
