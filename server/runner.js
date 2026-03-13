import fs from 'fs';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 使用系统临时目录避免中文路径问题
const TEMP_DIR = process.env.TEMP || process.env.TMP || path.join(__dirname, 'temp');
const CODE_TEMP_DIR = path.join(TEMP_DIR, 'c-trainer');
if (!fs.existsSync(CODE_TEMP_DIR)) {
  fs.mkdirSync(CODE_TEMP_DIR, { recursive: true });
}

const TIMEOUT_MS = 3000;

// 智能错误分析模块
const SMART_ERROR_ANALYZER = {
  // 常见错误模式及其智能提示
  patterns: [
    {
      // 头文件空格错误
      regex: /stdio\.\s*h|stdlib\.\s*h|math\.\s*h|string\.\s*h/,
      type: 'syntax',
      severity: 'error',
      title: '头文件名格式错误',
      explanation: '头文件名不能包含空格。GCC 会将 `stdio. h` 识别为两个不同的标记。',
      suggestion: '移除头文件名中的空格，确保使用正确的格式。',
      correctExample: '#include <stdio.h>',
      wrongExample: '#include <stdio. h>',
      knowledgePoint: '预处理指令',
      tips: ['头文件必须使用尖括号 <> 或双引号 "" 包裹', '文件名中不能有空格', '常见的头文件有 stdio.h, stdlib.h, math.h 等']
    },
    {
      // 缺少分号
      regex: /expected ';' before/,
      type: 'syntax',
      severity: 'error',
      title: '缺少分号',
      explanation: 'C 语言中，每条语句必须以分号 ; 结尾。这是最常见的语法错误之一。',
      suggestion: '在语句末尾添加分号。',
      correctExample: 'printf("Hello");\nreturn 0;',
      wrongExample: 'printf("Hello")\nreturn 0',
      knowledgePoint: '语句格式',
      tips: ['每个语句必须以分号结尾', '控制结构（if, for, while）的括号后不需要分号', '函数定义后不需要分号']
    },
    {
      // 未声明的标识符
      regex: /undeclared identifier|use of undeclared identifier/,
      type: 'semantic',
      severity: 'error',
      title: '使用了未声明的标识符',
      explanation: '在 C 语言中，所有变量和函数必须先声明后使用。编译器不知道这个标识符是什么。',
      suggestion: '检查是否：1) 拼写错误 2) 忘记声明 3) 忘记包含头文件',
      correctExample: 'int x = 10;\nprintf("%d", x);',
      wrongExample: 'printf("%d", x); // x 未声明',
      knowledgePoint: '变量声明',
      tips: ['变量使用前必须声明类型', '注意大小写敏感（x 和 X 是不同的）', '检查是否拼写错误']
    },
    {
      // 隐式函数声明
      regex: /implicit declaration of function/,
      type: 'semantic',
      severity: 'error',
      title: '函数隐式声明',
      explanation: '调用了一个没有声明的函数。在 C99 标准之后，隐式函数声明已被废弃。',
      suggestion: '1) 添加函数声明 2) 包含正确的头文件 3) 检查函数名拼写',
      correctExample: '#include <stdio.h>\nint main() {\n    printf("Hello");\n}',
      wrongExample: 'int main() {\n    printf("Hello"); // 未包含 stdio.h\n}',
      knowledgePoint: '函数声明',
      tips: ['使用标准库函数前包含对应的头文件', '自定义函数要先声明后使用', '启用 -Werror 将警告转为错误']
    },
    {
      // 类型不匹配
      regex: /incompatible implicit declaration|conflicting types/,
      type: 'type',
      severity: 'error',
      title: '类型不兼容',
      explanation: '函数的实际使用与声明不匹配，或者隐式声明的类型与实际类型冲突。',
      suggestion: '检查函数声明和调用的参数类型、返回值类型是否一致。',
      correctExample: 'int add(int a, int b);\nadd(1, 2);',
      wrongExample: 'int add(int a, int b);\nadd(1.5, 2.5); // 类型不匹配',
      knowledgePoint: '类型系统',
      tips: ['C 是强类型语言', '注意隐式类型转换', '启用编译器警告']
    },
    {
      // 字符串未终止
      regex: /unterminated string|missing terminating/,
      type: 'syntax',
      severity: 'error',
      title: '字符串未终止',
      explanation: '字符串常量缺少结束的双引号 "。',
      suggestion: '在字符串末尾添加双引号。',
      correctExample: 'printf("Hello, World!");',
      wrongExample: 'printf("Hello, World!);',
      knowledgePoint: '字符串常量',
      tips: ['字符串必须用双引号包裹', '转义双引号使用 \\"', '换行使用 \\n']
    },
    {
      // 注释未终止
      regex: /unterminated comment/,
      type: 'syntax',
      severity: 'error',
      title: '注释未终止',
      explanation: '多行注释 /* */ 缺少结束的 */。',
      suggestion: '在注释末尾添加 */。',
      correctExample: '/* 这是一个注释 */',
      wrongExample: '/* 这是一个注释',
      knowledgePoint: '注释语法',
      tips: ['单行注释使用 //', '多行注释使用 /* */', '注意不要嵌套多行注释']
    },
    {
      // 括号不匹配
      regex: /expected '}'|expected ')'|expected ']'|unmatched '|mismatched/,
      type: 'syntax',
      severity: 'error',
      title: '括号不匹配',
      explanation: '代码中的括号（圆括号、方括号、花括号）没有正确配对。',
      suggestion: '检查每个左括号是否有对应的右括号。建议使用编辑器的括号匹配功能。',
      correctExample: 'int main() {\n    if (x > 0) {\n        printf("positive");\n    }\n}',
      wrongExample: 'int main() {\n    if (x > 0 {\n        printf("positive");\n    }\n}',
      knowledgePoint: '括号匹配',
      tips: ['使用编辑器的括号高亮功能', '保持代码缩进', '写左括号后立即写右括号']
    },
    {
      // 格式化字符串错误
      regex: /format .* expects argument|conversion specifies/,
      type: 'format',
      severity: 'error',
      title: '格式化字符串错误',
      explanation: 'printf/scanf 的格式化字符串与实际参数不匹配。',
      suggestion: '检查格式化占位符（%d, %f, %s 等）是否与参数类型一致。',
      correctExample: 'int x = 10;\nprintf("%d", x);',
      wrongExample: 'int x = 10;\nprintf("%s", x); // %s 需要 char*',
      knowledgePoint: '格式化 I/O',
      tips: ['%d - int', '%f - float/double', '%c - char', '%s - 字符串', '%p - 指针']
    },
    {
      // 数组越界
      regex: /array index is not an integer|array subscript is not an integer/,
      type: 'semantic',
      severity: 'error',
      title: '数组索引错误',
      explanation: '数组索引必须是整数类型。',
      suggestion: '使用整数作为数组索引。',
      correctExample: 'int arr[5];\narr[2] = 10;',
      wrongExample: 'int arr[5];\narr[2.5] = 10; // 索引必须是整数',
      knowledgePoint: '数组',
      tips: ['数组索引从 0 开始', '确保索引在有效范围内', '注意不要越界']
    }
  ],
  
  // 分析错误并返回智能提示
  analyze(errorMsg) {
    const result = {
      originalError: errorMsg,
      smartTips: [],
      knowledgePoints: []
    };
    
    for (const pattern of this.patterns) {
      if (pattern.regex.test(errorMsg)) {
        result.smartTips.push({
          type: pattern.type,
          severity: pattern.severity,
          title: pattern.title,
          explanation: pattern.explanation,
          suggestion: pattern.suggestion,
          correctExample: pattern.correctExample,
          wrongExample: pattern.wrongExample,
          knowledgePoint: pattern.knowledgePoint,
          tips: pattern.tips
        });
        result.knowledgePoints.push(pattern.knowledgePoint);
      }
    }
    
    // 如果没有匹配到特定模式，返回通用提示
    if (result.smartTips.length === 0) {
      result.smartTips.push({
        type: 'general',
        severity: 'error',
        title: '编译错误',
        explanation: '代码存在语法或语义错误，编译器无法生成可执行文件。',
        suggestion: '仔细阅读错误信息，检查错误位置附近的代码。',
        correctExample: null,
        wrongExample: null,
        knowledgePoint: '编译基础',
        tips: ['从上到下阅读错误信息', '先修复第一个错误（后续错误可能是连锁反应）', '注意错误提示的行号']
      });
    }
    
    return result;
  }
};

// GCC 错误信息翻译词典
const ERROR_TRANSLATIONS = {
  // 常见错误类型
  'error:': '错误：',
  'warning:': '警告：',
  'note:': '提示：',
  'fatal error:': '致命错误：',

  // #include 指令
  '#include': '#include',
  'extra tokens at end of #include directive': '#include 指令末尾有多余的标记',
  'No such file or directory': '没有那个文件或目录',
  'cannot find': '找不到',

  // 具体错误信息
  'implicit declaration of function': '函数的隐式声明',
  'incompatible implicit declaration': '不兼容的隐式声明',
  'undeclared (first use in this function)': '未声明（首次在此函数中使用）',
  'each undeclared identifier is reported only once': '每个未声明的标识符只报告一次',
  'expected declaration specifiers before': '在...之前期望声明说明符',
  'expected declaration specifiers or': '期望声明说明符或',
  'expected \'{\' at end of input': '在输入末尾期望 \'{\'',
  'expected \'}\' at end of input': '在输入末尾期望 \'}\'',
  'expected \';\' before': '在...之前缺少 \';\'',
  'expected \')\' before': '在...之前期望 \')\'',
  'expected \'(\' before': '在...之前期望 \'(\'',
  'expected \']\' before': '在...之前期望 \']\'',
  'expected \'[\' before': '在...之前期望 \'[\'',
  'expected identifier or \'(\' before': '在...之前期望标识符或 \'(\'',
  'expected expression before': '在...之前期望表达式',
  'expected constant expression before': '在...之前期望常量表达式',
  'expected type-specifier before': '在...之前期望类型说明符',
  'expected \';\' at end of input': '在输入末尾缺少 \';\'',
  'expected declaration or statement at end of input': '在输入末尾期望声明或语句',
  'unknown type name': '未知的类型名',
  'use of undeclared identifier': '使用了未声明的标识符',
  'no member named': '没有名为...的成员',
  'invalid application of': '无效应用',
  'sizeof: expression must have complete type': 'sizeof 表达式必须有完整类型',
  'array index is not an integer': '数组索引不是整数',
  'cannot convert': '无法转换',
  'to type': '到类型',
  'from type': '从类型',
  'too many arguments to function': '函数参数过多',
  'too few arguments to function': '函数参数过少',
  'conflicting types for': '类型冲突',
  'redefinition of': '重定义',
  'previous declaration was here': '先前声明在此',
  'unused variable': '未使用的变量',
  'unused parameter': '未使用的参数',
  'set but not used': '已设置但未使用',
  'pointer targets in passing argument': '传递参数时的指针目标',
  'differ in signedness': '有符号性不同',
  'comparison of distinct pointer types': '不同类型指针的比较',
  'suggest parentheses around': '建议在...周围添加括号',
  'operation is always true': '操作始终为真',
  'operation is always false': '操作始终为假',
  'statement with no effect': '无效语句',
  'missing braces around initializer': '初始化器缺少大括号',
  'overflow in implicit constant conversion': '隐式常量转换溢出',
  'format': '格式',
  'expects argument of type': '期望参数类型为',
  'but argument is of type': '但参数类型为',
  'dereferencing void * pointer': '解引用 void* 指针',
  'invalid use of void expression': '无效使用 void 表达式',
  'return with a value, in function returning void': '在 void 函数中返回值',
  'control reaches end of non-void function': '非 void 函数未返回值',
  'function might be possible candidate for': '函数可能是...的候选',
  'attribute': '属性',
  'noreturn': '不返回',
  'does return': '会返回',
  
  // 语法错误
  'syntax error': '语法错误',
  'invalid syntax': '无效的语法',
  'unexpected token': '意外的标记',
  'invalid preprocessing directive': '无效的预处理指令',
  'unterminated comment': '未终止的注释',
  'unterminated string or character constant': '未终止的字符串或字符常量',
  'missing terminating': '缺少终止',
  'stray': ' stray 字符',
  'unrecognized character escape': '未识别的字符转义',
  
  // 链接错误
  'undefined reference to': '未定义的引用',
  'multiple definition of': '多重定义',
  'ld returned 1 exit status': '链接器返回退出状态 1',
  
  // 运行时错误
  'segmentation fault': '段错误',
  'stack overflow': '栈溢出',
  'heap-buffer-overflow': '堆缓冲区溢出',
  'stack-buffer-overflow': '栈缓冲区溢出',
  'use-after-free': '释放后使用',
  'memory leak': '内存泄漏',
  'double free': '重复释放',
  'invalid free': '无效的释放',
  'uninitialized value': '未初始化的值',
  'out of bounds': '越界',
  'null pointer dereference': '空指针解引用',
  'division by zero': '除以零',
  'floating point exception': '浮点异常',
  'integer overflow': '整数溢出',
  'timeout': '超时',
  'killed': '被终止',

  // 建议信息
  'or provide a declaration': '或提供声明',
  'did you mean': '你是不是想说',
  'replace this with': '替换为',

  // 位置信息
  'In function': '在函数中',
  'at top level': '在顶层',
  'first use in this function': '在此函数中首次使用',
};

function translateErrorMessage(message) {
  let translated = message;

  // 首先翻译固定的错误类型前缀
  translated = translated.replace(/error:/g, '错误：')
                        .replace(/warning:/g, '警告：')
                        .replace(/note:/g, '提示：');

  // 优先翻译较长的短语（避免被短词先匹配）
  const longPatterns = [
    'extra tokens at end of #include directive',
    'each undeclared identifier is reported only once',
    'expected declaration specifiers or',
    'expected declaration specifiers before',
    'pointer targets in passing argument',
    'comparison of distinct pointer types',
    'control reaches end of non-void function',
    'return with a value, in function returning void',
    'expected \';\' before',
    'expected \')\' before',
    'expected \'(\' before',
    'expected \']\' before',
    'expected \'[\' before',
    'expected identifier or \'(\' before',
    'expected expression before',
    'expected constant expression before',
    'expected type-specifier before',
    'sizeof: expression must have complete type',
    'too many arguments to function',
    'too few arguments to function',
    'missing braces around initializer',
    'overflow in implicit constant conversion',
    'expects argument of type',
    'but argument is of type',
    'dereferencing void * pointer',
    'invalid use of void expression',
    'function might be possible candidate for',
    'set but not used',
    'unused variable',
    'unused parameter',
    'unknown type name',
    'use of undeclared identifier',
    'no member named',
    'invalid application of',
    'cannot convert',
    'to type',
    'from type',
    'conflicting types for',
    'redefinition of',
    'previous declaration was here',
    'differ in signedness',
    'suggest parentheses around',
    'operation is always true',
    'operation is always false',
    'statement with no effect',
    'implicit declaration of function',
    'incompatible implicit declaration',
    'undeclared (first use in this function)',
    'expected \'{\' at end of input',
    'expected \'}\' at end of input',
    'expected \';\' at end of input',
    'expected declaration or statement at end of input',
    'attribute',
    'noreturn',
    'does return',
    'format',
    'or provide a declaration',
    'did you mean',
    'replace this with',
    'In function',
    'at top level',
    'first use in this function',
  ];

  // 按长度排序，优先匹配长短语
  longPatterns.sort((a, b) => b.length - a.length);

  for (const pattern of longPatterns) {
    const translation = ERROR_TRANSLATIONS[pattern];
    if (translation) {
      const regex = new RegExp(pattern.replace(/([(){}[\]])/g, '\\$1'), 'gi');
      translated = translated.replace(regex, translation);
    }
  }

  return translated;
}

function formatCompileError(error, tempDir) {
  if (!error || !tempDir) return error;
  const cleaned = error.split(tempDir).join('').replace(/[/\\][^/\\]*\.c/g, '/main.c');
  return translateErrorMessage(cleaned);
}

async function checkAsanAvailable() {
  return new Promise((resolve) => {
    const testCode = `
#include <stdio.h>
int main() { return 0; }
`;
    const testPath = path.join(CODE_TEMP_DIR, 'asan_test.c');
    const testExe = path.join(CODE_TEMP_DIR, 'asan_test.exe');
    
    fs.writeFileSync(testPath, testCode);
    
    const compile = spawn('gcc', [
      testPath,
      '-o', testExe,
      '-fsanitize=address'
    ], {
      shell: true,
      windowsHide: true
    });
    
    compile.on('close', (code) => {
      try {
        fs.unlinkSync(testPath);
        if (fs.existsSync(testExe)) fs.unlinkSync(testExe);
      } catch (e) {}
      resolve(code === 0);
    });
    
    compile.on('error', () => {
      try {
        fs.unlinkSync(testPath);
        if (fs.existsSync(testExe)) fs.unlinkSync(testExe);
      } catch (e) {}
      resolve(false);
    });
  });
}

let asanAvailable = null;

export async function runCode(codeSource, options = {}) {
  const { stdin: stdinInput } = options;
  
  if (asanAvailable === null) {
    asanAvailable = await checkAsanAvailable();
  }

  const timestamp = Date.now();
  const filename = `code_${timestamp}`;
  const srcPath = path.join(CODE_TEMP_DIR, `${filename}.c`);
  const exePath = path.join(CODE_TEMP_DIR, `${filename}.exe`);

  try {
    fs.writeFileSync(srcPath, codeSource, 'utf8');

    const compileArgs = [
      srcPath,
      '-o', exePath,
      '-g',
      '-Wall',  // 启用所有警告
      '-Werror',  // 将警告视为错误
      '-pedantic'  // 严格遵循标准
    ];

    if (asanAvailable) {
      compileArgs.push('-fsanitize=address');
      compileArgs.push('-fno-omit-frame-pointer');
    }

    const compileResult = await new Promise((resolve) => {
      const compile = spawn('gcc', compileArgs, {
        shell: true,
        windowsHide: true
      });

      let compileError = '';
      compile.stderr.on('data', (data) => {
        compileError += data.toString();
      });

      compile.on('close', (code) => {
        resolve({ exitCode: code, error: compileError });
      });

      compile.on('error', (err) => {
        resolve({ exitCode: -1, error: err.message });
      });
    });

    if (compileResult.exitCode !== 0) {
      // 解析错误行号
      const errorLines = [];
      const lines = compileResult.error.split('\n');
      for (const line of lines) {
        // 匹配 GCC 错误格式：main.c:5:2: error: ...
        const match = line.match(/main\.c:(\d+):\d+:/);
        if (match) {
          const lineNum = parseInt(match[1]);
          if (!errorLines.includes(lineNum)) {
            errorLines.push(lineNum);
          }
        }
      }
      
      // 使用智能错误分析
      const smartAnalysis = SMART_ERROR_ANALYZER.analyze(compileResult.error);
      
      return { 
        success: false, 
        output: formatCompileError(compileResult.error, CODE_TEMP_DIR), 
        type: 'compile_error',
        errorLines: errorLines,
        smartTips: smartAnalysis.smartTips,
        knowledgePoints: smartAnalysis.knowledgePoints
      };
    }

    const runResult = await new Promise((resolve) => {
      const isWindows = process.platform === 'win32';
      
      const run = spawn(exePath, [], {
        shell: false,
        windowsHide: true,
        stdio: ['pipe', 'pipe', 'pipe'],
        cwd: path.dirname(exePath)
      });

      let stdout = '';
      let stderr = '';

      if (stdinInput && stdinInput.length > 0) {
        try {
          const inputData = stdinInput.endsWith('\n') ? stdinInput : stdinInput + '\n';
          run.stdin.write(inputData);
          run.stdin.end();
        } catch (e) {
          console.error('stdin write error:', e.message);
        }
      }

      const timer = setTimeout(() => {
        run.kill();
        resolve({ 
          exitCode: -1, 
          stdout, 
          stderr: '⏱ 运行超时 (3秒)\n\n可能的原因:\n  • 死循环 (while/for 条件永远为真)\n  • 等待输入 - 请在「标准输入」框中填入数据\n  • 递归没有终止条件',
          timedOut: true 
        });
      }, TIMEOUT_MS);

      run.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      run.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      run.on('close', (code) => {
        clearTimeout(timer);
        resolve({ exitCode: code, stdout, stderr, timedOut: false });
      });

      run.on('error', (err) => {
        clearTimeout(timer);
        resolve({ exitCode: -1, stdout, stderr: err.message, timedOut: false });
      });
    });

    try {
      fs.unlinkSync(srcPath);
      fs.unlinkSync(exePath);
    } catch (e) {}

    if (runResult.timedOut) {
      return { 
        success: false, 
        output: runResult.stderr, 
        type: 'timeout' 
      };
    }

    if (runResult.exitCode !== 0 || runResult.stderr) {
      let errorType = 'runtime_error';
      
      if (runResult.stderr.includes('AddressSanitizer') || 
          runResult.stderr.includes('ASan')) {
        errorType = 'memory_error';
      }

      return { 
        success: false, 
        output: runResult.stderr || `程序退出码: ${runResult.exitCode}`, 
        type: errorType 
      };
    }

    return { 
      success: true, 
      output: runResult.stdout || '(无输出)',
      type: 'success' 
    };

  } catch (error) {
    try {
      if (fs.existsSync(srcPath)) fs.unlinkSync(srcPath);
      if (fs.existsSync(exePath)) fs.unlinkSync(exePath);
    } catch (e) {}

    return { 
      success: false, 
      output: error.message, 
      type: 'system_error' 
    };
  }
}

export async function compileOnly(codeSource) {
  const timestamp = Date.now();
  const filename = `code_${timestamp}`;
  const srcPath = path.join(TEMP_DIR, `${filename}.c`);

  try {
    fs.writeFileSync(srcPath, codeSource, 'utf8');

    const compileResult = await new Promise((resolve) => {
      const compile = spawn('gcc', [
        '-fsyntax-only',
        '-Wall',
        '-Wextra',
        srcPath
      ], {
        shell: true,
        windowsHide: true
      });

      let compileError = '';
      compile.stderr.on('data', (data) => {
        compileError += data.toString();
      });

      compile.on('close', (code) => {
        resolve({ exitCode: code, error: compileError });
      });

      compile.on('error', (err) => {
        resolve({ exitCode: -1, error: err.message });
      });
    });

    try {
      fs.unlinkSync(srcPath);
    } catch (e) {}

    if (compileResult.exitCode !== 0) {
      return {
        success: false,
        output: formatCompileError(compileResult.error, CODE_TEMP_DIR),
        type: 'syntax_error'
      };
    }

    return {
      success: true,
      output: '编译成功! (无语法错误)',
      type: 'success'
    };

  } catch (error) {
    return {
      success: false,
      output: error.message,
      type: 'system_error'
    };
  }
}

export async function getAssembly(codeSource, optimization = '0') {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  const srcPath = path.join(CODE_TEMP_DIR, `asm_${timestamp}_${random}.c`);

  try {
    fs.writeFileSync(srcPath, codeSource, 'utf8');

    const args = [
      `-O${optimization}`,
      '-S',
      '-masm=intel',
      '-fno-asynchronous-unwind-tables',
      '-fno-dwarf2-cfi-asm',
      '-o', '-',
      srcPath
    ];

    const result = await new Promise((resolve) => {
      const proc = spawn('gcc', args, { shell: true, windowsHide: true });
      let stdout = '';
      let stderr = '';
      proc.stdout.on('data', (d) => stdout += d.toString());
      proc.stderr.on('data', (d) => stderr += d.toString());
      proc.on('close', (code) => resolve({ exitCode: code, stdout, stderr }));
      proc.on('error', (err) => resolve({ exitCode: -1, stdout: '', stderr: err.message }));
    });

    if (result.exitCode !== 0) {
      return {
        success: false,
        output: result.stderr.replace(new RegExp(path.basename(srcPath).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), 'main.c'),
        type: 'compile_error'
      };
    }

    const cleaned = result.stdout
      .split('\n')
      .filter(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('.cfi_')) return false;
        if (trimmed.startsWith('.type')) return false;
        if (trimmed.startsWith('.size')) return false;
        if (trimmed.startsWith('.ident')) return false;
        if (trimmed.startsWith('.file') && !trimmed.includes('.c')) return false;
        if (trimmed.startsWith('.section') && !trimmed.includes('.text') && !trimmed.includes('.rodata')) return false;
        if (trimmed.startsWith('.p2align')) return false;
        if (trimmed.startsWith('.def') || trimmed.startsWith('.scl') || trimmed.startsWith('.endef')) return false;
        return true;
      })
      .join('\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();

    return {
      success: true,
      output: cleaned,
      type: 'assembly',
      optimization: `O${optimization}`
    };

  } catch (error) {
    return { success: false, output: error.message, type: 'system_error' };
  } finally {
    try { fs.unlinkSync(srcPath); } catch {}
  }
}

export async function queryTypeInfo(typeName) {
  if (!/^[a-zA-Z_][a-zA-Z0-9_ *]*$/.test(typeName) || typeName.length > 100) {
    return { success: false, output: '无效的类型名', type: 'invalid_input' };
  }

  const code = `#include <stdio.h>
#include <stddef.h>
#include <stdint.h>
#include <limits.h>
#include <float.h>
#include <string.h>

int main() {
    printf("========== 类型信息 ==========\\n");
    printf("类型: ${typeName}\\n");
    printf("sizeof: %zu 字节\\n", sizeof(${typeName}));
    printf("位数: %zu 位\\n", sizeof(${typeName}) * 8);

    struct _align_test { char c; ${typeName} x; };
    printf("对齐: %zu 字节\\n", offsetof(struct _align_test, x));
    printf("==============================\\n");
    return 0;
}`;

  return await runCode(code, '');
}

export async function formatCode(codeSource) {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  const srcPath = path.join(CODE_TEMP_DIR, `fmt_${timestamp}_${random}.c`);

  try {
    fs.writeFileSync(srcPath, codeSource, 'utf8');

    const result = await new Promise((resolve) => {
      const p = spawn('clang-format', ['--style=Google', srcPath], { shell: true, windowsHide: true });
      let stdout = '';
      let stderr = '';
      p.stdout.on('data', (d) => stdout += d.toString());
      p.stderr.on('data', (d) => stderr += d.toString());
      p.on('close', (code) => resolve({ exitCode: code, stdout, stderr }));
      p.on('error', () => resolve({ exitCode: -1, stdout: '', stderr: 'clang-format 不可用' }));
    });

    if (result.exitCode === 0 && result.stdout) {
      return { success: true, output: result.stdout, type: 'formatted', tool: 'clang-format' };
    }

    const formatted = simpleFormat(codeSource);
    return { success: true, output: formatted, type: 'formatted', tool: 'built-in' };

  } catch (error) {
    return { success: false, output: error.message, type: 'system_error' };
  } finally {
    try { fs.unlinkSync(srcPath); } catch {}
  }
}

function simpleFormat(code) {
  const lines = code.split('\n');
  let indent = 0;
  const result = [];

  for (let line of lines) {
    let trimmed = line.trim();
    if (!trimmed) { result.push(''); continue; }

    if (trimmed.startsWith('}') || trimmed.startsWith(')')) {
      indent = Math.max(0, indent - 1);
    }

    result.push('    '.repeat(indent) + trimmed);

    const opens = (trimmed.match(/{/g) || []).length;
    const closes = (trimmed.match(/}/g) || []).length;
    indent += opens - closes;
    if (indent < 0) indent = 0;
  }

  return result.join('\n');
}

export async function memcheck(codeSource, stdinInput = '') {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  const srcPath = path.join(CODE_TEMP_DIR, `mem_${timestamp}_${random}.c`);
  const exePath = path.join(CODE_TEMP_DIR, `mem_${timestamp}_${random}${process.platform === 'win32' ? '.exe' : ''}`);

  try {
    fs.writeFileSync(srcPath, codeSource, 'utf8');

    let hasValgrind = false;
    if (process.platform !== 'win32') {
      try {
        const vcheck = await new Promise((resolve) => {
          const p = spawn('valgrind', ['--version'], { shell: true });
          p.on('close', (code) => resolve(code === 0));
          p.on('error', () => resolve(false));
        });
        hasValgrind = vcheck;
      } catch { hasValgrind = false; }
    }

    if (hasValgrind) {
      const compile = await new Promise((resolve) => {
        const p = spawn('gcc', [srcPath, '-o', exePath, '-g', '-O0'], { shell: true, windowsHide: true });
        let stderr = '';
        p.stderr.on('data', (d) => stderr += d.toString());
        p.on('close', (code) => resolve({ exitCode: code, stderr }));
        p.on('error', (err) => resolve({ exitCode: -1, stderr: err.message }));
      });

      if (compile.exitCode !== 0) {
        return { success: false, output: compile.stderr, type: 'compile_error' };
      }

      const result = await new Promise((resolve) => {
        const p = spawn('valgrind', [
          '--leak-check=full',
          '--show-leak-kinds=all',
          '--track-origins=yes',
          '--error-exitcode=1',
          exePath
        ], { shell: true, windowsHide: true });

        let stdout = '';
        let stderr = '';
        
        if (stdinInput) { try { p.stdin.write(stdinInput); } catch {} }
        try { p.stdin.end(); } catch {}

        const timer = setTimeout(() => { try { p.kill(); } catch {} }, 10000);
        p.stdout.on('data', (d) => stdout += d.toString());
        p.stderr.on('data', (d) => stderr += d.toString());
        p.on('close', (code) => { clearTimeout(timer); resolve({ exitCode: code, stdout, stderr }); });
        p.on('error', (err) => { clearTimeout(timer); resolve({ exitCode: -1, stdout: '', stderr: err.message }); });
      });

      let report = '🔍 Valgrind 内存检测报告\n\n';
      const leakMatch = result.stderr.match(/definitely lost: ([\d,]+) bytes/);
      const possiblyMatch = result.stderr.match(/possibly lost: ([\d,]+) bytes/);
      const errorsMatch = result.stderr.match(/ERROR SUMMARY: (\d+) errors/);
      const invalidRead = (result.stderr.match(/Invalid read/g) || []).length;
      const invalidWrite = (result.stderr.match(/Invalid write/g) || []).length;
      const uninit = (result.stderr.match(/uninitialised/gi) || []).length;

      const hasIssues = (errorsMatch && parseInt(errorsMatch[1]) > 0) || (leakMatch && leakMatch[1] !== '0');

      if (invalidRead > 0) report += `❌ 无效读取: ${invalidRead} 次\n`;
      if (invalidWrite > 0) report += `❌ 无效写入: ${invalidWrite} 次\n`;
      if (uninit > 0) report += `⚠️ 使用未初始化的值: ${uninit} 次\n`;
      if (leakMatch && leakMatch[1] !== '0') report += `💧 确定泄漏: ${leakMatch[1]} 字节\n`;
      if (possiblyMatch && possiblyMatch[1] !== '0') report += `💧 可能泄漏: ${possiblyMatch[1]} 字节\n`;

      if (!hasIssues) {
        report += '✅ 未发现内存错误或泄漏！\n';
      }

      if (result.stdout) report += `\n程序输出:\n${result.stdout}\n`;
      report += `\n${'─'.repeat(40)}\n原始报告:\n${result.stderr}`;

      return { success: !hasIssues, output: report, type: hasIssues ? 'memory_error' : 'success' };

    } else {
      return {
        success: false,
        output: '⚠️ 内存检测工具不可用\n\nWindows: AddressSanitizer 在 MinGW 上不支持\nLinux: 请安装 Valgrind (sudo apt install valgrind)\n\n当前只能通过普通运行检测段错误等严重错误。',
        type: 'not_available'
      };
    }

  } catch (error) {
    return { success: false, output: error.message, type: 'system_error' };
  } finally {
    try { fs.unlinkSync(srcPath); } catch {}
    try { fs.unlinkSync(exePath); } catch {}
  }
}

export async function preprocess(codeSource) {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  const srcPath = path.join(CODE_TEMP_DIR, `pp_${timestamp}_${random}.c`);

  try {
    fs.writeFileSync(srcPath, codeSource, 'utf8');

    const result = await new Promise((resolve) => {
      const proc = spawn('gcc', ['-E', '-P', srcPath], { shell: true, windowsHide: true });
      let stdout = '';
      let stderr = '';
      proc.stdout.on('data', (d) => stdout += d.toString());
      proc.stderr.on('data', (d) => stderr += d.toString());
      proc.on('close', (code) => resolve({ exitCode: code, stdout, stderr }));
      proc.on('error', (err) => resolve({ exitCode: -1, stdout: '', stderr: err.message }));
    });

    if (result.exitCode !== 0) {
      return {
        success: false,
        output: result.stderr.replace(new RegExp(path.basename(srcPath).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), 'main.c'),
        type: 'compile_error'
      };
    }

    const lines = result.stdout.split('\n');
    const totalLines = lines.length;
    const displayLines = lines.slice(Math.max(0, totalLines - 300));
    const truncated = totalLines > 300;

    let output = '';
    if (truncated) {
      output += `/* 预处理输出共 ${totalLines} 行，以下显示最后 ${displayLines.length} 行 */\n`;
      output += `/* （前面 ${totalLines - displayLines.length} 行是标准库头文件内容） */\n\n`;
    }
    output += displayLines.join('\n');

    return {
      success: true,
      output: output.trim(),
      type: 'preprocessed',
      totalLines
    };

  } catch (error) {
    return { success: false, output: error.message, type: 'system_error' };
  } finally {
    try { fs.unlinkSync(srcPath); } catch {}
  }
}
