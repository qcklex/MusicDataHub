
var europeUrls = {
    "Belgium": "https://www.billboard.com/charts/belgium-songs-hotw/",
    "Croatia": "https://www.billboard.com/charts/croatia-songs-hotw/",
    "Czech Republic": "https://www.billboard.com/charts/czech-republic-songs-hotw/",
    "Denmark": "https://www.billboard.com/charts/denmark-songs-hotw/",
    "Finland": "https://www.billboard.com/charts/finland-songs-hotw/",
    "France": "https://www.billboard.com/charts/france-songs-hotw/",
    "Germany": "https://www.billboard.com/charts/germany-songs-hotw/",
    "Greece": "https://www.billboard.com/charts/greece-songs-hotw/",
    "Hungary": "https://www.billboard.com/charts/hungary-songs-hotw/",
    "Iceland": "https://www.billboard.com/charts/iceland-songs-hotw/",
    "Ireland": "https://www.billboard.com/charts/ireland-songs-hotw/",
    "Netherlands": "https://www.billboard.com/charts/netherlands-songs-hotw/",
    "Norway": "https://www.billboard.com/charts/norway-songs-hotw/",
    "Poland": "https://www.billboard.com/charts/poland-songs-hotw/",
    "Portugal": "https://www.billboard.com/charts/portugal-songs-hotw/",
    "Romania": "https://www.billboard.com/charts/romania-songs-hotw/",
    "Slovakia": "https://www.billboard.com/charts/slovakia-songs-hotw/",
    "Spain": "https://www.billboard.com/charts/spain-songs-hotw/",
    "Sweden": "https://www.billboard.com/charts/sweden-songs-hotw/",
    "Switzerland": "https://www.billboard.com/charts/switzerland-songs-hotw/",
    "United Kingdom": "https://www.billboard.com/charts/official-uk-songs/"
};

var africaUrls = {
    "South Africa": "https://www.billboard.com/charts/south-africa-songs-hotw/"
};

var asiaPacificUrls = {
    "Australia": "https://www.billboard.com/charts/australia-songs-hotw/",
    "Hong Kong": "https://www.billboard.com/charts/hong-kong-songs-hotw/",
    "India": "https://www.billboard.com/charts/india-songs-hotw/",
    "Indonesia": "https://www.billboard.com/charts/indonesia-songs-hotw/",
    "Malaysia": "https://www.billboard.com/charts/malaysia-songs-hotw/",
    "New Zealand": "https://www.billboard.com/charts/new-zealand-songs-hotw/",
    "Philippines": "https://www.billboard.com/charts/philippines-songs-hotw/",
    "Singapore": "https://www.billboard.com/charts/singapore-songs-hotw/",
    "South Korea": "https://www.billboard.com/charts/south-korea-songs-hotw/",
    "Taiwan": "https://www.billboard.com/charts/taiwan-songs-hotw/",
    "Thailand": "https://www.billboard.com/charts/billboard-thailand-top-thai-songs/",
    "Turkey": "https://www.billboard.com/charts/turkey-songs-hotw/"
};

var latinAmericaUrls = {
    "Bolivia": "https://www.billboard.com/charts/bolivia-songs-hotw/",
    "Brazil": "https://www.billboard.com/charts/brazil-songs-hotw/",
    "Chile": "https://www.billboard.com/charts/chile-songs-hotw/",
    "Colombia": "https://www.billboard.com/charts/colombia-songs-hotw/",
    "Ecuador": "https://www.billboard.com/charts/ecuador-songs-hotw/",
    "Mexico": "https://www.billboard.com/charts/mexico-songs-hotw/",
    "Peru": "https://www.billboard.com/charts/peru-songs-hotw/"
};

// Function to handle popup display
const handlePopup = (country) => {
    const url = europeUrls[country] || africaUrls[country] || asiaPacificUrls[country] || latinAmericaUrls[country];
    if (url) {
        window.open(url, '_blank');
    } else {
        alert("URL not found for this country.");
    }
};

// Add event listener for map clicks
mapInstance.on('click', (e) => {
    const country = e.target.data('country');
    if (country) {
        handlePopup(country);
    }
});