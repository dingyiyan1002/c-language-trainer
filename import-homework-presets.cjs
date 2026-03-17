const fs = require('fs');
const path = require('path');

// 递归查找所有 C 文件
function findCFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findCFiles(filePath, fileList);
    } else if (file.endsWith('.c')) {
      const relativePath = filePath.replace(process.cwd() + '\\作业\\', '');
      fileList.push({
        path: relativePath,
        fullPath: filePath
      });
    }
  });
  
  return fileList;
}

// 难度分类规则
function getDifficulty(filename, filepath) {
  const name = filename.toLowerCase();
  const path = filepath.toLowerCase();
  
  // 入门级别
  if (name.includes('helloworld') || name.includes('变量') || name.includes('运算符') || 
      name.includes('if') || name.includes('switch') || name.includes('const') ||
      name.includes('sizeof') || name.includes('输入') || name.includes('输出') ||
      name.includes('1-data')) {
    return '入门';
  }
  
  // 基础级别
  if (name.includes('循环') || name.includes('while') || name.includes('for') ||
      name.includes('数组') || name.includes('array') || name.includes('函数') ||
      name.includes('func') || name.includes('static') || name.includes('宏') ||
      path.includes('2-array')) {
    return '基础';
  }
  
  // 中级
  if (name.includes('指针') || name.includes('point') || name.includes('结构') ||
      name.includes('struct') || name.includes('字符串') || name.includes('str') ||
      path.includes('3-point') || path.includes('4-point')) {
    return '中级';
  }
  
  // 高级
  if (name.includes('链表') || name.includes('list') || name.includes('排序') ||
      name.includes('sort') || name.includes('树') || name.includes('tree') ||
      name.includes('malloc') || name.includes('free') || name.includes('内存') ||
      path.includes('linux') || path.includes('datastruct') || path.includes('编译')) {
    return '高级';
  }
  
  return '基础';
}

// 主程序
const baseDir = 'c:\\Users\\6\\Downloads\\web-development-request-received - 副本\\作业';
const cFiles = findCFiles(baseDir);

console.log(`找到 ${cFiles.length} 个 C 文件`);

// 生成预设题目
const presets = cFiles.map(file => {
  const content = fs.readFileSync(file.fullPath, 'utf-8');
  const filename = file.path.split('\\').pop().replace('.c', '');
  const difficulty = getDifficulty(filename, file.path);
  
  return {
    name: filename,
    difficulty: difficulty,
    code: content.replace(/\t/g, '\\t'),
    chars: content.length
  };
});

// 生成 TypeScript 代码
let tsCode = `// 从作业目录导入的 ${presets.length} 个题目\n`;
tsCode += `const IMPORTED_PRESETS = [\n`;

presets.forEach((preset, index) => {
  tsCode += `  {\n`;
  tsCode += `    name: '${preset.name.replace(/'/g, "\\'")}',\n`;
  tsCode += `    difficulty: '${preset.difficulty}',\n`;
  tsCode += `    code: \`${preset.code}\`,\n`;
  tsCode += `  },\n`;
});

tsCode += `];\n`;

// 写入文件
const outputPath = 'C:/temp/imported-presets-from-homework.ts';
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
