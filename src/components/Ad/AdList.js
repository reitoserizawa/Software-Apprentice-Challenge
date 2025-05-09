import React from 'react';
import { useSelector } from 'react-redux';

import AdListItem from './AdListItem';

const AdList = () => {
    const searchKeyword = useSelector(state => state.app.searchKeyword.toLowerCase());
    const sortOption = useSelector(state => state.app.sortOption);
    const platform = useSelector(state => state.app.platform);

    const { ads } = useSelector(state => state.ads);
    const filteredAds = ads.filter(ad => ad.campaign.toLowerCase().includes(searchKeyword)).filter(ad => (platform ? ad.platform === platform : 1));

    const sortedAds = [...filteredAds].sort((a, b) => {
        const aSpend = a.spend;
        const bSpend = b.spend;

        const aValid = typeof aSpend === 'number';
        const bValid = typeof bSpend === 'number';

        if (!aValid && !bValid) return 0;
        if (!aValid) return 1;
        if (!bValid) return -1;

        return sortOption === 'asc' ? aSpend - bSpend : sortOption === 'desc' ? bSpend - aSpend : 0;
    });

    return (
        <div className='overflow-x-auto w-full'>
            <table className='min-w-full bg-white rounded-lg shadow-sm text-sm'>
                <thead>
                    <tr className='text-left text-gray-500 border-y'>
                        <th className='px-4 py-3'>Campain</th>
                        <th className='px-4 py-3'>Adset</th>
                        <th className='px-4 py-3'>Creative</th>
                        <th className='px-4 py-3'>Spend</th>
                        <th className='px-4 py-3'>Impressions</th>
                        <th className='px-4 py-3'>Clicks</th>
                        <th className='px-4 py-3'>Results</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedAds.map((adData, idx) => (
                        <AdListItem key={`${adData?.platform}-${adData?.campaign}-${idx}`} adData={adData} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdList;
