// 课程和题目数据 - 硬核C语言代码思维训练器

export interface CodeLineAnalysis {
  num: number;
  explanation: string;
  memoryChange?: string;
  highlight?: boolean;
}

export interface MemoryVisualization {
  cells: Array<{
    name: string;
    address: string;
    value: string;
    beforeValue?: string;
    type: 'variable' | 'pointer' | 'array' | 'struct';
    pointsTo?: string;
    changed?: boolean;
  }>;
  layout?: 'stack' | 'heap' | 'both';
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  keyPoints: string[];
}

export interface Question {
  id: number;
  chapter: string;
  type: 'fill' | 'output' | 'debug' | 'order' | 'multi-fill' | 'choice' | 'multi-choice';
  title: string;
  description?: string;
  code?: string;
  blanks?: { hint: string; answer: string | string[]; caseSensitive?: boolean }[];
  correctOutput?: string;
  bugLine?: number;
  bugFix?: string;
  codeLines?: string[];
  correctOrder?: number[];
  explanation: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  vocabulary?: { word: string; meaning: string }[];
  visualization?: {
    type: 'memory' | 'structure' | 'flow' | 'pointer' | 'array' | 'linkedlist' | 'execution' | 'html';
    data?: any;
    file?: string;
  };
  lineAnalysis?: CodeLineAnalysis[];
  memoryViz?: MemoryVisualization;
  knowledgePoints?: string[];
  hint?: string;
  commonMistakes?: string[];
  relatedConcepts?: string[];
  // 选择题专用字段
  options?: { id: string; text: string }[];
  correctAnswer?: string | string[];
  multiCorrect?: boolean;
}

export type QuestionMode = 'real' | 'practice';

export interface Chapter {
  id: string;
  name: string;
  icon: string;
  description: string;
  lessons: Lesson[];
  questionCount: number;
  mode?: QuestionMode;
}


// 从类型文件导出
export type { CodeLineAnalysis, MemoryVisualization, Lesson, Question, QuestionMode, Chapter };
