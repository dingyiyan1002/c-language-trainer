const fs = require('fs');

// 读取 sources.json
const sourcesFile = 'C:/temp/homework/sources.json';
const presetsFile = 'C:/temp/typing-presets.json';

const sources = JSON.parse(fs.readFileSync(sourcesFile, 'utf-8'));
console.log(`Loaded ${sources.length} sources`);

// 生成预设
const presets = sources.slice(0, 100).map(source => {
    const path = source.path;
    const content = source.content;
    
    // 从路径提取文件名
    const fileName = path.split('\\').pop();
    const name = fileName.replace('.c', '');
    
    // 计算字符数
    const charCount = content.length;
    
    // 判断难度
    let difficulty;
    if (charCount < 200) {
        difficulty = '入门';
    } else if (charCount < 400) {
        difficulty = '基础';
    } else if (charCount < 600) {
        difficulty = '中级';
    } else {
        difficulty = '高级';
    }
    
    return {
        name: name,
        difficulty: difficulty,
        code: content,
        chars: charCount
    };
});

// 导出
fs.writeFileSync(presetsFile, JSON.stringify(presets, null, 2), 'utf-8');
console.log(`Exported ${presets.length} presets to ${presetsFile}`);
