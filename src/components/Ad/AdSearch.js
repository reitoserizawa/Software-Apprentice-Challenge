import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setSearchKeyword } from '../../redux/appSlice';

const AdSearch = () => {
    const [searchKeywordPlaceholder, setSearchKeywordPlaceholder] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setSearchKeyword(searchKeywordPlaceholder));
    };

    return (
        <form className='h-[53px] mb-[53px] relative' onSubmit={handleSubmit}>
            <input value={searchKeywordPlaceholder} onChange={e => setSearchKeywordPlaceholder(e.target.value)} className='block w-full p-4 text-sm text-gray-900 border-b focus:outline-none' placeholder='Search' required />
            <button type='submit' className='text-white absolute end-2.5 bottom-2.5 bg-gray-500 hover:bg-gray-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2'>
                Search
            </button>
        </form>
    );
};

export default AdSearch;
