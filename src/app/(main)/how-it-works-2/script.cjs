const https = require('https');

https.get('https://www.qceventplanning.com/online-event-courses/all-access-program', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const fonts = data.match(/family=[^"'\s&]+/g);
    const colors = data.match(/#[0-9a-fA-F]{3,6}/g);
    
    // get unique matches
    const uniqueFonts = [...new Set(fonts)];
    
    // count color frequencies
    const colorCounts = {};
    if (colors) {
        colors.forEach(c => {
            const up = c.toUpperCase();
            colorCounts[up] = (colorCounts[up] || 0) + 1;
        });
    }
    const sortedColors = Object.entries(colorCounts).sort((a,b) => b[1] - a[1]).slice(0, 20);
    
    console.log("Fonts:", uniqueFonts);
    console.log("Colors:", sortedColors);
  });
});
