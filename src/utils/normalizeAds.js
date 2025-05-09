const normalizeAdsData = data => {
    const normalizedAds = [];

    // facebook
    data.facebook_ads.forEach(ad => {
        normalizedAds.push({
            platform: 'facebook',
            campaign: ad.campaign_name,
            adset: ad.media_buy_name,
            creative: ad.ad_name,
            spend: ad.spend,
            impressions: ad.impressions,
            clicks: ad.clicks,
            results: null
        });
    });

    // twitter
    data.twitter_ads.forEach(ad => {
        normalizedAds.push({
            platform: 'twitter',
            campaign: ad.campaign,
            adset: ad.ad_group,
            creative: ad.image_name,
            spend: ad.spend,
            impressions: ad.impressions,
            clicks: ad.post_clicks,
            results: null
        });
    });

    // snapchat
    data.snapchat_ads.forEach(ad => {
        normalizedAds.push({
            platform: 'snapchat',
            campaign: ad.campaign_name,
            adset: ad.ad_squad_name,
            creative: ad.creative_name,
            spend: ad.cost,
            impressions: ad.impressions,
            clicks: ad.post_clicks,
            results: null
        });
    });

    data.google_analytics.forEach(ga => {
        const match = normalizedAds.find(ad => ad.campaign === ga.utm_campaign && ad.adset === ga.utm_medium && ad.creative === ga.utm_content);

        if (match) {
            match.results = ga.results;
        } else {
            // if no match, add ga result separately
            normalizedAds.push({
                platform: 'google_analytics',
                campaign: ga.utm_campaign,
                adset: ga.utm_medium,
                creative: ga.utm_content,
                spend: null,
                impressions: null,
                clicks: null,
                results: ga.results
            });
        }
    });

    return normalizedAds;
};

export default normalizeAdsData;
