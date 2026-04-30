const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it has font-heading
    if (content.includes('font-heading')) {
      // Find instances of font-heading and make sure they have font-extrabold and tracking-tight
      // Only replace if they don't already have it
      content = content.replace(/font-heading/g, 'font-heading font-extrabold tracking-tight');
      // If there are duplicate font-extrabold or tracking-tight (from previous manual ones), clean them up
      content = content.replace(/font-extrabold font-extrabold/g, 'font-extrabold');
      content = content.replace(/tracking-tight tracking-tight/g, 'tracking-tight');
      content = content.replace(/font-bold font-extrabold/g, 'font-extrabold');

      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + file);
    }
  }
});
