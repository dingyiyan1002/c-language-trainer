import { useState } from 'react';

type FieldType = {
  id: string;
  name: string;
  size: number;
  color: string;
  label: string;
};

const FIELD_TYPES: FieldType[] = [
  { id: 'char', name: 'char', size: 1, color: 'bg-blue-500', label: 'char (1B)' },
  { id: 'short', name: 'short', size: 2, color: 'bg-green-500', label: 'short (2B)' },
  { id: 'int', name: 'int', size: 4, color: 'bg-orange-500', label: 'int (4B)' },
  { id: 'long', name: 'long', size: 8, color: 'bg-red-500', label: 'long (8B)' },
];

const MEMORY_SIZE = 32;

export function StructPackerGame() {
  const [memory, setMemory] = useState<(FieldType | null)[]>(Array(MEMORY_SIZE).fill(null));
  const [draggedField, setDraggedField] = useState<FieldType | null>(null);
  const [history, setHistory] = useState<(FieldType | null)[][]>([]);

  const handleDragStart = (field: FieldType) => {
    setDraggedField(field);
  };

  const canPlaceAt = (field: FieldType, startIndex: number): boolean => {
    // 检查对齐要求
    const alignment = field.size;
    if (startIndex % alignment !== 0) return false;
    
    // 检查是否有足够空间
    for (let i = 0; i < field.size; i++) {
      if (startIndex + i >= MEMORY_SIZE || memory[startIndex + i] !== null) {
        return false;
      }
    }
    return true;
  };

  const handleDrop = (index: number) => {
    if (!draggedField) return;
    
    if (canPlaceAt(draggedField, index)) {
      setHistory([...history, [...memory]]);
      const newMemory = [...memory];
      for (let i = 0; i < draggedField.size; i++) {
        newMemory[index + i] = draggedField;
      }
      setMemory(newMemory);
    }
    setDraggedField(null);
  };

  const clearMemory = () => {
    setHistory([...history, [...memory]]);
    setMemory(Array(MEMORY_SIZE).fill(null));
  };

  const undo = () => {
    if (history.length > 0) {
      setMemory(history[history.length - 1]);
      setHistory(history.slice(0, -1));
    }
  };

  // 计算统计
  const usedBytes = memory.filter(m => m !== null).length;
  const paddingBytes = memory.filter((m, i) => {
    if (m !== null) return false;
    // 检查后面是否有数据
    for (let j = i + 1; j < MEMORY_SIZE; j++) {
      if (memory[j] !== null) return true;
    }
    return false;
  }).length;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 rounded-2xl p-6 border border-indigo-500/30 shadow-2xl max-w-2xl mx-auto">
      {/* 标题 */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-white mb-1">Package 结构体内存布局</h3>
        <p className="text-indigo-300 text-sm">拖拽字段到内存槽，观察对齐和填充字节</p>
      </div>

      {/* 字段工具栏 */}
      <div className="flex justify-center gap-3 mb-4">
        {FIELD_TYPES.map((field) => (
          <div
            key={field.id}
            draggable
            onDragStart={() => handleDragStart(field)}
            className={`
              ${field.color} px-3 py-2 rounded-lg cursor-grab active:cursor-grabbing
              text-white text-sm font-medium shadow-lg transform hover:scale-105 transition-transform
              border-2 border-white/20
            `}
          >
            {field.label}
          </div>
        ))}
      </div>

      {/* 内存网格 */}
      <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 mb-4">
        <div className="grid grid-cols-8 gap-1">
          {memory.map((cell, index) => {
            const isAlignment4 = index % 4 === 0;
            const isAlignment8 = index % 8 === 0;
            
            return (
              <div
                key={index}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(index)}
                className={`
                  h-10 rounded flex items-center justify-center text-xs font-mono relative
                  ${cell 
                    ? `${cell.color} text-white shadow-inner` 
                    : 'bg-slate-700/50 border border-slate-600/50 hover:bg-slate-600/50'
                  }
                  ${isAlignment8 ? 'ring-1 ring-yellow-500/50' : ''}
                `}
              >
                {cell ? cell.name[0].toUpperCase() : ''}
                
                {/* 地址标签 */}
                {index % 4 === 0 && (
                  <span className="absolute -left-1 -top-3 text-[8px] text-slate-500">
                    {index}
                  </span>
                )}
              </div>
            );
          })}
        </div>
        
        {/* 对齐标记说明 */}
        <div className="flex justify-center gap-4 mt-2 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-yellow-500/50"></span>
            8字节对齐边界
          </span>
        </div>
      </div>

      {/* 统计信息 */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-slate-800/80 rounded-lg p-3 text-center border border-slate-700">
          <div className="text-xs text-slate-400">已用内存</div>
          <div className="text-xl font-bold text-green-400">{usedBytes}B</div>
        </div>
        <div className="bg-slate-800/80 rounded-lg p-3 text-center border border-slate-700">
          <div className="text-xs text-slate-400">填充字节</div>
          <div className={`text-xl font-bold ${paddingBytes > 0 ? 'text-red-400' : 'text-slate-400'}`}>
            {paddingBytes}B
          </div>
        </div>
        <div className="bg-slate-800/80 rounded-lg p-3 text-center border border-slate-700">
          <div className="text-xs text-slate-400">总大小</div>
          <div className="text-xl font-bold text-blue-400">{usedBytes + paddingBytes}B</div>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex justify-center gap-2">
        <button
          onClick={undo}
          disabled={history.length === 0}
          className="px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-white rounded-lg text-sm transition-colors"
        >
          Undo️ 撤销
        </button>
        <button
          onClick={clearMemory}
          className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-sm transition-colors"
        >
          Trash️ 清空
        </button>
      </div>

      {/* 教学提示 */}
      <div className="mt-4 p-3 bg-indigo-900/30 rounded-lg border border-indigo-500/20">
        <div className="text-xs text-indigo-200 space-y-1">
          <p><span className="font-bold">Lightbulb 内存对齐规则：</span></p>
          <p>• char 可以放在任意地址</p>
          <p>• short 必须放在 2 的倍数地址</p>
          <p>• int 必须放在 4 的倍数地址</p>
          <p>• long 必须放在 8 的倍数地址</p>
          <p className="text-indigo-300 mt-2">灰色格子是填充字节(Padding)，浪费内存但保证对齐</p>
        </div>
      </div>
    </div>
  );
}
