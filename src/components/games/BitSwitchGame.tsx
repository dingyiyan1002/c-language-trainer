import { useState } from 'react';

// 位运算开关箱 - 微型交互组件
// 8个开关，实时显示二进制和十六进制值

export function BitSwitchGame() {
  const [bits, setBits] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const toggleBit = (index: number) => {
    const newBits = [...bits];
    newBits[index] = newBits[index] === 0 ? 1 : 0;
    setBits(newBits);
  };

  // 计算数值
  const binaryString = bits.join('');
  const decimalValue = parseInt(binaryString, 2);
  const hexValue = decimalValue.toString(16).toUpperCase().padStart(2, '0');

  // 位权标签
  const weights = [128, 64, 32, 16, 8, 4, 2, 1];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-6 border border-purple-500/30 shadow-2xl max-w-md mx-auto">
      {/* 标题 */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-1">Plug 位运算开关箱</h3>
        <p className="text-purple-300 text-sm">点击开关，观察二进制与十六进制的转换</p>
      </div>

      {/* 8个开关 */}
      <div className="flex justify-center gap-2 mb-6">
        {bits.map((bit, index) => (
          <button
            key={index}
            onClick={() => toggleBit(index)}
            className={`
              relative w-10 h-16 rounded-lg transition-all duration-200 transform active:scale-95
              ${bit === 1 
                ? 'bg-gradient-to-b from-green-400 to-green-600 shadow-lg shadow-green-500/50' 
                : 'bg-gradient-to-b from-slate-700 to-slate-800 border-2 border-slate-600'
              }
            `}
          >
            {/* 开关指示灯 */}
            <div className={`
              absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full transition-all
              ${bit === 1 ? 'bg-green-200 shadow-lg shadow-green-200/80' : 'bg-slate-900'}
            `} />
            
            {/* 位权标签 */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/70">
              {weights[index]}
            </div>
          </button>
        ))}
      </div>

      {/* 位位置标签 */}
      <div className="flex justify-center gap-2 mb-6 text-xs text-slate-400 font-mono">
        {['b7', 'b6', 'b5', 'b4', 'b3', 'b2', 'b1', 'b0'].map((label, i) => (
          <div key={i} className="w-10 text-center">{label}</div>
        ))}
      </div>

      {/* 数值显示 */}
      <div className="grid grid-cols-3 gap-3">
        {/* 二进制 */}
        <div className="bg-slate-800/80 rounded-xl p-3 text-center border border-slate-700">
          <div className="text-xs text-slate-400 mb-1">二进制</div>
          <div className="text-lg font-mono text-cyan-400 tracking-wider">
            {binaryString}
          </div>
        </div>

        {/* 十进制 */}
        <div className="bg-slate-800/80 rounded-xl p-3 text-center border border-slate-700">
          <div className="text-xs text-slate-400 mb-1">十进制</div>
          <div className="text-lg font-mono text-yellow-400">
            {decimalValue}
          </div>
        </div>

        {/* 十六进制 */}
        <div className="bg-slate-800/80 rounded-xl p-3 text-center border border-slate-700">
          <div className="text-xs text-slate-400 mb-1">十六进制</div>
          <div className="text-lg font-mono text-pink-400">
            0x{hexValue}
          </div>
        </div>
      </div>

      {/* 快捷操作 */}
      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={() => setBits([0, 0, 0, 0, 0, 0, 0, 0])}
          className="px-3 py-1.5 text-xs bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
        >
          清零
        </button>
        <button
          onClick={() => setBits([1, 1, 1, 1, 1, 1, 1, 1])}
          className="px-3 py-1.5 text-xs bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
        >
          全1 (255)
        </button>
        <button
          onClick={() => setBits([1, 0, 1, 0, 1, 0, 1, 0])}
          className="px-3 py-1.5 text-xs bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
        >
          交替 (0xAA)
        </button>
      </div>

      {/* 教学提示 */}
      <div className="mt-4 p-3 bg-purple-900/30 rounded-lg border border-purple-500/20">
        <div className="text-xs text-purple-200">
          <span className="font-bold">Lightbulb 提示：</span>
          每个开关代表一个二进制位。开启开关(绿色)表示该位为1。
          8个位组成1个字节(Byte)，范围是 0-255 (0x00-0xFF)。
        </div>
      </div>
    </div>
  );
}
