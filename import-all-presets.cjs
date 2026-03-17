const fs = require('fs');

// 读取已导出的 C 源码
const sourcesPath = 'C:/temp/homework/sources.json';
const content = fs.readFileSync(sourcesPath, 'utf-8');

// 手动修复 JSON（处理可能的格式问题）
let sources;
try {
  sources = JSON.parse(content);
} catch (e) {
  console.log('JSON 解析失败，尝试修复...');
  // 可能是编码问题，尝试读取修复后的文件
  const fixedPath = 'C:/temp/homework/sources-fixed.json';
  if (fs.existsSync(fixedPath)) {
    sources = JSON.parse(fs.readFileSync(fixedPath, 'utf-8'));
  } else {
    throw e;
  }
}

console.log(`找到 ${sources.length} 个 C 源码文件`);

// 难度分类规则
function getDifficulty(filename, filepath) {
  const name = filename.toLowerCase();
  const path = filepath.toLowerCase();
  
  // 入门级别
  if (name.includes('helloworld') || name.includes('变量') || name.includes('运算符') || 
      name.includes('if') || name.includes('switch') || name.includes('const') ||
      name.includes('sizeof') || name.includes('输入') || name.includes('输出')) {
    return '入门';
  }
  
  // 基础级别
  if (name.includes('循环') || name.includes('while') || name.includes('for') ||
      name.includes('数组') || name.includes('array') || name.includes('函数') ||
      name.includes('func') || name.includes('static') || name.includes('宏')) {
    return '基础';
  }
  
  // 中级
  if (name.includes('指针') || name.includes('point') || name.includes('结构') ||
      name.includes('struct') || name.includes('字符串') || name.includes('str')) {
    return '中级';
  }
  
  // 高级
  if (name.includes('链表') || name.includes('list') || name.includes('排序') ||
      name.includes('sort') || name.includes('二叉树') || name.includes('tree') ||
      name.includes('malloc') || name.includes('free') || name.includes('内存')) {
    return '高级';
  }
  
  // 默认根据路径判断
  if (path.includes('1-data')) return '入门';
  if (path.includes('2-array')) return '基础';
  if (path.includes('3-point')) return '中级';
  if (path.includes('4-')) return '高级';
  
  return '基础';
}

// 生成预设题目
const presets = sources.map((source, index) => {
  const filename = source.path.split('\\').pop().replace('.c', '');
  const difficulty = getDifficulty(filename, source.path);
  
  return {
    name: filename,
    difficulty: difficulty,
    code: source.content.replace(/\t/g, '\\t'),
    chars: source.content.length
  };
});

// 生成 TypeScript 代码
let tsCode = `// 从桌面 C 源码导入的 ${presets.length} 个题目\n`;
tsCode += `const IMPORTED_PRESETS = [\n`;

presets.forEach((preset, index) => {
  tsCode += `  {\n`;
  tsCode += `    name: '${preset.name.replace(/'/g, "\\'")}',\n`;
  tsCode += `    difficulty: '${preset.difficulty}',\n`;
  tsCode += `    code: \`${preset.code}\`,\n`;
  tsCode += `  },\n`;
});

tsCode += `];\n`;
tsCode += `\n`;
tsCode += `// 合并到 PRESET_CODES\n`;
tsCode += `const ALL_PRESETS = [...PRESET_CODES, ...IMPORTED_PRESETS];\n`;

// 写入文件
const outputPath = 'C:/temp/imported-presets.ts';
fs.writeFileSync(outputPath, tsCode, 'utf-8');

console.log(`已生成 ${presets.length} 个题目的 TypeScript 代码`);
console.log(`输出文件：${outputPath}`);
console.log(`\n难度分布:`);
const difficultyCount = {};
presets.forEach(p => {
  difficultyCount[p.difficulty] = (difficultyCount[p.difficulty] || 0) + 1;
});
Object.entries(difficultyCount).forEach(([diff, count]) => {
  console.log(`  ${diff}: ${count}`);
});
