import React, { useState, useEffect, useCallback } from 'react';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

interface ToastProps {
  toast: Toast;
  onClose: (id: string) => void;
}

const typeConfig: Record<ToastType, { color: string; icon: React.ReactNode; bgColor: string }> = {
  success: {
    color: 'var(--success-500)',
    icon: <CheckCircle size={20} />,
    bgColor: 'var(--success-500)',
  },
  error: {
    color: 'var(--danger-500)',
    icon: <XCircle size={20} />,
    bgColor: 'var(--danger-500)',
  },
  warning: {
    color: 'var(--warning-500)',
    icon: <AlertTriangle size={20} />,
    bgColor: 'var(--warning-500)',
  },
  info: {
    color: 'var(--info-500)',
    icon: <Info size={20} />,
    bgColor: 'var(--info-500)',
  },
};

const ToastItem: React.FC<ToastProps> = ({ toast, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(100);
  const duration = toast.duration || 3000;
  const config = typeConfig[toast.type];

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remaining);
      if (remaining <= 0) {
        clearInterval(interval);
        handleClose();
      }
    }, 16);

    return () => clearInterval(interval);
  }, [duration]);

  const handleClose = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => onClose(toast.id), 200);
  }, [toast.id, onClose]);

  return (
    <div
      style={{
        width: '360px',
        background: 'var(--bg-surface)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden',
        animation: isExiting ? 'slideOutRight 200ms ease forwards' : 'slideInRight 300ms ease forwards',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '4px',
          background: config.bgColor,
        }}
      />
      <div style={{ padding: 'var(--space-4)', paddingLeft: 'var(--space-5)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
          <div style={{ color: config.color, flexShrink: 0, marginTop: '2px' }}>
            {config.icon}
          </div>
          <div style={{ flex: 1, color: 'var(--text-primary)', fontSize: '14px', lineHeight: 1.5 }}>
            {toast.message}
          </div>
          <button
            onClick={handleClose}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-tertiary)',
              padding: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-sm)',
              transition: 'color 150ms ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
          >
            <X size={16} />
          </button>
        </div>
      </div>
      <div
        style={{
          height: '3px',
          background: 'var(--bg-overlay)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: `${progress}%`,
            background: config.bgColor,
            transition: 'width 16ms linear',
          }}
        />
      </div>
    </div>
  );
};

interface ToastContainerProps {
  toasts: Toast[];
  onClose: (id: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onClose }) => {
  const visibleToasts = toasts.slice(-3);

  return (
    <div
      style={{
        position: 'fixed',
        top: 'var(--space-4)',
        right: 'var(--space-4)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      {visibleToasts.map((toast) => (
        <div key={toast.id} style={{ pointerEvents: 'auto' }}>
          <ToastItem toast={toast} onClose={onClose} />
        </div>
      ))}
    </div>
  );
};

let toastId = 0;
let addToastExternal: ((toast: Omit<Toast, 'id'>) => void) | null = null;

export const toast = {
  success: (message: string, duration?: number) => {
    if (addToastExternal) addToastExternal({ type: 'success', message, duration });
  },
  error: (message: string, duration?: number) => {
    if (addToastExternal) addToastExternal({ type: 'error', message, duration });
  },
  warning: (message: string, duration?: number) => {
    if (addToastExternal) addToastExternal({ type: 'warning', message, duration });
  },
  info: (message: string, duration?: number) => {
    if (addToastExternal) addToastExternal({ type: 'info', message, duration });
  },
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((newToast: Omit<Toast, 'id'>) => {
    const id = `toast-${++toastId}`;
    setToasts((prev) => [...prev, { ...newToast, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    addToastExternal = addToast;
    return () => {
      addToastExternal = null;
    };
  }, [addToast]);

  return (
    <>
      {children}
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </>
  );
};

export default ToastProvider;
