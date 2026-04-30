const https = require('https');

https.get('https://www.qceventplanning.com/online-event-courses/all-access-program', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const fonts = data.match(/font-family[^;>]+/g);
    const cssLinks = data.match(/href="[^"]+\.css"/g);
    
    console.log("Inline Fonts:", [...new Set(fonts)].slice(0, 5));
    console.log("CSS Links:", cssLinks ? cssLinks.slice(0, 2) : "none");
  });
});
