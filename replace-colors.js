const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const targetFilePattern = /\.(ts|tsx)$/;

walkDir('./src', (filePath) => {
  if (targetFilePattern.test(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;
    
    // Very basic hardcoded replacements
    content = content.replace(/bgcolor:\s*\"#0a0f1c\"/g, 'bgcolor: "background.default"');
    content = content.replace(/bgcolor:\s*'#0a0f1c'/g, "bgcolor: 'background.default'");
    
    // Color replacements
    content = content.replace(/color:\s*\"white\"/g, 'color: "text.primary"');
    content = content.replace(/color:\s*'white'/g, "color: 'text.primary'");
    
    content = content.replace(/color:\s*\"#fff\"/g, 'color: "text.primary"');
    content = content.replace(/color:\s*'#fff'/g, "color: 'text.primary'");
    
    content = content.replace(/color:\s*\"#94a3b8\"/g, 'color: "text.secondary"');
    content = content.replace(/color:\s*'#94a3b8'/g, "color: 'text.secondary'");

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log('Updated:', filePath);
    }
  }
});
