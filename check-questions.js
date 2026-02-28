const fs = require('fs');

console.log('=== C 语言训练器 - 题目质量检查报告 ===\n');

const content = fs.readFileSync('src/data/lessons.ts', 'utf8');

// 1. 统计题型
const types = content.match(/type:\s*'(choice|fill|output|debug|multi-choice)'/g);
const typeCount = {};
if (types) {
  types.forEach(t => {
    const type = t.match(/'(.*?)'/)[1];
    typeCount[type] = (typeCount[type] || 0) + 1;
  });
}
console.log('1. 题型分布:');
console.log('   总题目数:', types ? types.length : 0);
Object.entries(typeCount).forEach(([type, count]) => {
  console.log(`   - ${type}: ${count}题`);
});

// 2. 检查空字段
const emptyTitles = content.match(/title:\s*'',/g);
const emptyExplain = content.match(/explanation:\s*'',/g);
const nullOutput = content.match(/correctOutput:\s*null/g);
console.log('\n2. 必填字段检查:');
console.log('   空标题:', emptyTitles ? emptyTitles.length : 0);
console.log('   空解析:', emptyExplain ? emptyExplain.length : 0);
console.log('   null 输出:', nullOutput ? nullOutput.length : 0);

// 3. 检查 ID 重复
const ids = content.match(/id:\s*(\d+),/g);
const idMap = {};
let duplicates = 0;
if (ids) {
  ids.forEach(id => {
    const num = id.match(/\d+/)[0];
    if (idMap[num]) {
      duplicates++;
      if (duplicates <= 5) console.log(`   重复 ID: ${num}`);
    }
    idMap[num] = true;
  });
}
console.log('\n3. ID 检查:');
console.log('   重复 ID 数:', duplicates);

// 4. 检查代码块
const codeBlocks = content.match(/code:\s*`[\s\S]*?`/g);
console.log('\n4. 代码块检查:');
console.log('   代码块总数:', codeBlocks ? codeBlocks.length : 0);

// 5. 检查选择题选项
const choiceQuestions = content.match(/type:\s*'choice'[\s\S]{0,500}/g);
let missingOptions = 0;
if (choiceQuestions) {
  choiceQuestions.forEach(q => {
    if (!q.includes('options:') || q.includes('options:\s*[]')) {
      missingOptions++;
    }
  });
}
console.log('\n5. 选择题检查:');
console.log('   选择题总数:', choiceQuestions ? choiceQuestions.length : 0);
console.log('   缺少选项:', missingOptions);

// 6. 检查难度分布
const difficulties = content.match(/difficulty:\s*([1-5])/g);
const diffCount = {};
if (difficulties) {
  difficulties.forEach(d => {
    const level = d.match(/[1-5]/)[0];
    diffCount[level] = (diffCount[level] || 0) + 1;
  });
}
console.log('\n6. 难度分布:');
Object.entries(diffCount).forEach(([level, count]) => {
  console.log(`   难度${level}: ${count}题`);
});

console.log('\n=== 检查完成 ===');
