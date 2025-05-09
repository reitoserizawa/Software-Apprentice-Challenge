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

    // GA
    data.google_analytics.forEach(ad => {
        normalizedAds.push({
            platform: 'google_analytics',
            campaign: ad.utm_campaign,
            adset: ad.utm_medium,
            creative: ad.utm_content,
            spend: null,
            impressions: null,
            clicks: null,
            results: ad.results
        });
    });

    return normalizedAds;
};

export default normalizeAdsData;
