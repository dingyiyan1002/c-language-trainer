const fs = require('fs');

// 读取预设 JSON
const presetsFile = 'C:/temp/typing-presets.json';
const targetFile = 'C:/Users/6/Downloads/web-development-request-received - 副本/src/components/CodeTypingPractice.tsx';

const presets = JSON.parse(fs.readFileSync(presetsFile, 'utf-8'));
console.log(`Loaded ${presets.length} presets`);

// 读取目标文件
let content = fs.readFileSync(targetFile, 'utf-8');

// 找到 PRESET_CODES 数组的结束位置
const presetStart = content.indexOf('const PRESET_CODES = [');
if (presetStart === -1) {
    console.error('Could not find PRESET_CODES array');
    process.exit(1);
}

const presetEnd = content.indexOf('];', presetStart);
if (presetEnd === -1) {
    console.error('Could not find end of PRESET_CODES array');
    process.exit(1);
}

// 生成新的预设
const newPresets = presets.map(preset => {
    const name = preset.name.replace(/'/g, "\\'");
    const difficulty = preset.difficulty;
    const code = preset.code
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '');
    
    return `  {
    name: '${name}',
    difficulty: '${difficulty}',
    code: "${code}",
  },`;
}).join('\n');

// 插入新的预设
const before = content.substring(0, presetEnd + 2);
const after = content.substring(presetEnd + 2);

const newContent = before + '\n\n// 从桌面 C 源码导入的预设题目\n' + newPresets + after;

// 保存
fs.writeFileSync(targetFile, newContent, 'utf-8');

console.log(`Added ${presets.length} presets to CodeTypingPractice.tsx`);
