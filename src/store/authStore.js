import { create } from 'zustand';
import { auth } from '../api/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';

export const useAuthStore = create((set) => ({
  user: null,
  isLoading: true,
  setUser: (user) => set({ user, isLoading: false }),
  logout: async () => {
    await signOut(auth);
    set({ user: null, isLoading: false });
  },
}));

// Initialize auth state listener
onAuthStateChanged(auth, (user) => {
  useAuthStore.getState().setUser(user);
});