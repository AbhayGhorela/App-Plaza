const axios = require('axios');
const cheerio = require('cheerio');

const getRandomAppData = async () => {
  // List of package names or URLs
  const appList = [
    'com.whatsapp',
    'com.instagram.android',
    'com.google.android.apps.maps',
    'com.facebook.katana',
    'com.twitter.android',
    'com.snapchat.android',
    'com.spotify.music',
    'com.netflix.mediaclient',
    'com.amazon.mShop.android.shopping',
    'com.whatsapp.w4b',
    'com.microsoft.office.word',
    'com.google.android.youtube',
    'com.google.android.googlequicksearchbox',
    'com.linkedin.android',
    'com.pinterest',
    'com.tinder',
    'com.ubercab',
    'com.shazam.android',
    'com.evernote',
    
    // Add more app package names or URLs as needed
  ];

  // Randomly select an app
  const randomApp = appList[Math.floor(Math.random() * appList.length)];

  try {
    const response = await axios.get(`https://play.google.com/store/apps/details?id=${randomApp}`);
    const $ = cheerio.load(response.data);
    const scriptContent = $('script[type="application/ld+json"]').html();
    const jsonData = JSON.parse(scriptContent);

    // Extract relevant data
    const appName = jsonData.name || $('h1[itemprop="name"]').text().trim();
    const icon = jsonData.image || $('img[alt="Cover art"]').attr('src');
    const description = jsonData.description || $('meta[name="description"]').attr('content');
    const downloadLink = `https://play.google.com${'/store/apps/details?id='}${randomApp}`;


    return { appName, icon, description, downloadLink };
  } catch (error) {
    console.error('Error scraping data:', error.message);
    return null;
  }
};

// Example usage
getRandomAppData()
  .then((data) => {
    if (data) {
      console.log('Scraped data:', data);
      // Use the data in your application
    } else {
      console.log('Failed to scrape data.');
    }
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

module.exports = { getRandomAppData };