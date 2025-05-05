import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';

export function useAutoLogout(timeout = 30 * 60 * 1000) {
  const { logout } = useAuthStore();

  useEffect(() => {
    let timer;
    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => logout(), timeout);
    };

    const events = ['mousemove', 'keydown', 'click', 'scroll'];
    events.forEach((event) => window.addEventListener(event, resetTimer));
    resetTimer();

    return () => {
      clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [logout, timeout]);
}