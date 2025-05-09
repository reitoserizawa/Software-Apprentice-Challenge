import React from 'react';

const AdListItem = ({ adData }) => (
    <tr className='border-b hover:bg-gray-50'>
        <td className='px-4 py-3 text-gray-700'>{adData?.campaign || '-'}</td>
        <td className='px-4 py-3 text-gray-700'>{adData?.adset || '-'}</td>
        <td className='px-4 py-3 text-gray-700'>{adData?.creative || '-'}</td>
        <td className='px-4 py-3 text-gray-700'>{adData?.spend || '-'}</td>
        <td className='px-4 py-3 text-gray-700'>{adData?.impressions || '-'}</td>
        <td className='px-4 py-3 text-gray-700'>{adData?.clicks || '-'}</td>
        <td className='px-4 py-3 text-gray-700'>{adData?.results || '-'}</td>
    </tr>
);

export default AdListItem;
