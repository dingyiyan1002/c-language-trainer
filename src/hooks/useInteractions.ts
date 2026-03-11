import { useEffect, useCallback, useRef } from 'react';

export function useSoundEffects() {
  const audioContext = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContext.current) {
      audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContext.current;
  }, []);

  const playTone = useCallback((frequency: number, duration: number, type: OscillatorType = 'sine') => {
    try {
      const ctx = getAudioContext();
      
      // 确保AudioContext处于运行状态
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = type;

      gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + duration);
    } catch (e) {
      console.log('Audio not supported:', e);
    }
  }, [getAudioContext]);

  const playCorrect = useCallback(() => {
    playTone(523.25, 0.1, 'sine');
    setTimeout(() => playTone(659.25, 0.1, 'sine'), 100);
    setTimeout(() => playTone(783.99, 0.15, 'sine'), 200);
  }, [playTone]);

  const playWrong = useCallback(() => {
    playTone(200, 0.3, 'sawtooth');
  }, [playTone]);

  const playClick = useCallback(() => {
    playTone(800, 0.05, 'square');
  }, [playTone]);

  const playSuccess = useCallback(() => {
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      setTimeout(() => playTone(freq, 0.15, 'sine'), i * 100);
    });
  }, [playTone]);

  const playLevelUp = useCallback(() => {
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99];
    notes.forEach((freq, i) => {
      setTimeout(() => playTone(freq, 0.2, 'triangle'), i * 80);
    });
  }, [playTone]);

  return { playCorrect, playWrong, playClick, playSuccess, playLevelUp };
}

export function useKeyboardShortcuts(handlers: {
  onSubmit?: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  onHint?: () => void;
  onEscape?: () => void;
}) {
  const handleSubmit = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handlers.onSubmit?.();
    }
  }, [handlers]);

  const handleNext = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || (e.key === 'n' && !e.ctrlKey && !e.metaKey)) {
      handlers.onNext?.();
    }
  }, [handlers]);

  const handlePrev = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || (e.key === 'p' && !e.ctrlKey && !e.metaKey)) {
      handlers.onPrev?.();
    }
  }, [handlers]);

  const handleHint = useCallback((e: KeyboardEvent) => {
    if (e.key === 'h' && !e.ctrlKey && !e.metaKey) {
      handlers.onHint?.();
    }
  }, [handlers]);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handlers.onEscape?.();
    }
  }, [handlers]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      handleSubmit(e);
      handleNext(e);
      handlePrev(e);
      handleHint(e);
      handleEscape(e);
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleSubmit, handleNext, handlePrev, handleHint, handleEscape]);

  return null;
}

export function useStreak() {
  const streak = useRef(0);
  const maxStreak = useRef(0);

  const increment = useCallback(() => {
    streak.current += 1;
    maxStreak.current = Math.max(maxStreak.current, streak.current);
    return streak.current;
  }, []);

  const reset = useCallback(() => {
    streak.current = 0;
    return 0;
  }, []);

  const getStreak = useCallback(() => streak.current, []);
  const getMaxStreak = useCallback(() => maxStreak.current, []);

  return { increment, reset, getStreak, getMaxStreak };
}

export function useAchievements() {
  const achievements = useRef<Set<string>>(new Set());

  const unlock = useCallback((id: string) => {
    if (!achievements.current.has(id)) {
      achievements.current.add(id);
      return true;
    }
    return false;
  }, []);

  const has = useCallback((id: string) => achievements.current.has(id), []);

  const getAll = useCallback(() => Array.from(achievements.current), []);

  return { unlock, has, getAll };
}

export const ACHIEVEMENTS = {
  FIRST_CORRECT: { id: 'first_correct', name: 'Target 初次成功', description: '答对第一道题' },
  STREAK_5: { id: 'streak_5', name: 'Flame 五连对', description: '连续答对5道题' },
  STREAK_10: { id: 'streak_10', name: 'Zap 十连对', description: '连续答对10道题' },
  STREAK_20: { id: 'streak_20', name: 'Star 二十连对', description: '连续答对20道题' },
  COMPLETE_CHAPTER: { id: 'complete_chapter', name: 'BookOpen 章节完成', description: '完成一个章节' },
  SPEED_DEMON: { id: 'speed_demon', name: 'Zap 速度达人', description: '10秒内答对题目' },
  PERFECT_CHAPTER: { id: 'perfect_chapter', name: 'Gem 完美章节', description: '章节全对' },
  POINTER_MASTER: { id: 'pointer_master', name: 'Finger 指针大师', description: '完成所有指针题目' },
  MEMORY_EXPERT: { id: 'memory_expert', name: 'Brain 内存专家', description: '完成所有内存题目' },
  LINUX_PRO: { id: 'linux_pro', name: 'Bird Linux专家', description: '完成所有Linux题目' },
};
