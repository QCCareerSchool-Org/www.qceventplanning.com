const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace font-extrabold with font-bold
    let newContent = content.replace(/font-extrabold/g, 'font-bold');

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Updated ' + file);
    }
  }
});
