import React from 'react';

const AdListItem = () => {
    return (
        <tr className='border-b hover:bg-gray-50'>
            <td className='px-4 py-3 text-gray-700'>Campaign name</td>
            <td className='px-4 py-3 text-gray-700'>Adset name</td>
            <td className='px-4 py-3 text-gray-700'>Creative name</td>
            <td className='px-4 py-3 text-gray-700'>N/A</td>
            <td className='px-4 py-3 text-gray-700'>N/A</td>
            <td className='px-4 py-3 text-gray-700'>N/A</td>
            <td className='px-4 py-3 text-gray-700'>N/A</td>
        </tr>
    );
};

// Campaign, Adset, Creative, Spend, Impressions, Clicks, Results;

export default AdListItem;
