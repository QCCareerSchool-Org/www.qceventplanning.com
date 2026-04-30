const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('font-serif')) {
      content = content.replace(/font-serif/g, 'font-heading');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + file);
    }
  }
});
