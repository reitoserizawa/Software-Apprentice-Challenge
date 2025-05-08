import React from 'react';

const AdSearch = () => {
    return (
        <form className='h-[53px] mb-[53px] relative'>
            <input type='search' className='block w-full p-4 text-sm text-gray-900 border-b focus:outline-none' placeholder='Search' required />
            <button type='submit' className='text-white absolute end-2.5 bottom-2.5 bg-gray-500 hover:bg-gray-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2'>
                Search
            </button>
        </form>
    );
};

export default AdSearch;
