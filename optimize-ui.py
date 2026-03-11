import re

file_path = 'src/App.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 替换 Hero 区域
old_hero = r'''      {/* Hero section */}
      <div className="text-center mb-10 pt-6">
        <div className={\`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 \${isDarkMode \? '' : 'bg-white/60 border-slate-200'}\`}>
          <Brain className="w-4 h-4 text-emerald-400" />
          <span className={\`\${isDarkMode \? 'text-slate-300' : 'text-slate-600'}\`}>输入式答题 · 拒绝无脑选择</span>
        </div>
        <h1 className={\`text-3xl sm:text-4xl font-bold mb-4 \${isDarkMode \? 'text-white' : 'text-slate-800'}\`}>
          C 语言<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">代码思维</span>训练
        </h1>
        <p className={\`text-lg max-w-xl mx-auto \${isDarkMode \? 'text-slate-400' : 'text-slate-600'}\`}>
          亲手敲代码，像编译器一样思考
        </p>
      </div>'''

new_hero = '''      {/* Hero section */}
      <div className="text-center mb-10 pt-6">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-enhanced mb-6 card-float cursor-default">
          <Brain className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="text-sm font-medium text-emerald-300">输入式答题 · 拒绝无脑选择</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          C 语言<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 animate-gradient">代码思维</span>训练
        </h1>
        <p className="text-lg max-w-xl mx-auto text-slate-300 font-light leading-relaxed">
          亲手敲代码，像编译器一样思考
        </p>
      </div>'''

# 替换统计卡片
old_stats = r'''      {/* Stats cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
        <div className={\`glass rounded-xl p-4 text-center \${isDarkMode \? '' : 'bg-white/60 border-slate-200'}\`}>
          <Target className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
          <p className={\`text-2xl font-bold \${isDarkMode \? 'text-white' : 'text-slate-800'}\`}>{completedCount}</p>
          <p className={\`text-xs \${isDarkMode \? 'text-slate-500' : 'text-slate-400'}\`}>已完成</p>
        </div>
        <div className={\`glass rounded-xl p-4 text-center \${isDarkMode \? '' : 'bg-white/60 border-slate-200'}\`}>
          <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
          <p className={\`text-2xl font-bold \${isDarkMode \? 'text-white' : 'text-slate-800'}\`}>{correctCount}</p>
          <p className={\`text-xs \${isDarkMode \? 'text-slate-500' : 'text-slate-400'}\`}>答对</p>
        </div>
        <div className={\`glass rounded-xl p-4 text-center \${isDarkMode \? '' : 'bg-white/60 border-slate-200'}\`}>
          <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
          <p className={\`text-2xl font-bold \${isDarkMode \? 'text-white' : 'text-slate-800'}\`}>{accuracy}%</p>
          <p className={\`text-xs \${isDarkMode \? 'text-slate-500' : 'text-slate-400'}\`}>正确率</p>
        </div>
        <div className={\`glass rounded-xl p-4 text-center \${isDarkMode \? '' : 'bg-white/60 border-slate-200'}\`}>
          <Flame className="w-6 h-6 text-orange-400 mx-auto mb-2" />
          <p className={\`text-2xl font-bold \${isDarkMode \? 'text-white' : 'text-slate-800'}\`}>{progress.wrong.length}</p>
          <p className={\`text-xs \${isDarkMode \? 'text-slate-500' : 'text-slate-400'}\`}>待攻克</p>
        </div>
        <button
          onClick={onViewBookmarks}
          className={\`glass rounded-xl p-4 text-center transition-all hover:scale-105 \${isDarkMode \? 'hover:bg-yellow-500/10' : 'bg-white/60 border-slate-200 hover:bg-yellow-50'}\`}
        >
          <Bookmark className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
          <p className={\`text-2xl font-bold \${isDarkMode \? 'text-white' : 'text-slate-800'}\`}>{progress.bookmarked.length}</p>
          <p className={\`text-xs \${isDarkMode \? 'text-slate-500' : 'text-slate-400'}\`}>已收藏</p>
        </button>
      </div>'''

new_stats = '''      {/* Stats cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
        <div className="glass-enhanced rounded-xl p-5 text-center card-float group">
          <Target className="w-7 h-7 text-emerald-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
          <p className="text-3xl font-bold text-white">{completedCount}</p>
          <p className="text-xs text-slate-400 mt-1">已完成</p>
        </div>
        <div className="glass-enhanced rounded-xl p-5 text-center card-float group">
          <CheckCircle className="w-7 h-7 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
          <p className="text-3xl font-bold text-white">{correctCount}</p>
          <p className="text-xs text-slate-400 mt-1">答对</p>
        </div>
        <div className="glass-enhanced rounded-xl p-5 text-center card-float group">
          <Award className="w-7 h-7 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
          <p className="text-3xl font-bold text-white">{accuracy}%</p>
          <p className="text-xs text-slate-400 mt-1">正确率</p>
        </div>
        <div className="glass-enhanced rounded-xl p-5 text-center card-float group">
          <Flame className="w-7 h-7 text-orange-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
          <p className="text-3xl font-bold text-white">{progress.wrong.length}</p>
          <p className="text-xs text-slate-400 mt-1">待攻克</p>
        </div>
        <button
          onClick={onViewBookmarks}
          className="glass-enhanced rounded-xl p-5 text-center transition-all hover:scale-105 card-float group"
        >
          <Bookmark className="w-7 h-7 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
          <p className="text-3xl font-bold text-white">{progress.bookmarked.length}</p>
          <p className="text-xs text-slate-400 mt-1">已收藏</p>
        </button>
      </div>'''

# 执行替换
content = content.replace(eval(f"r'''{old_hero}'''").replace('?', r'?').replace('$', r'$').replace('{', r'{').replace('}', r'}').replace('`', r'`'), new_hero)
print('Hero 区域替换完成')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('保存完成')
