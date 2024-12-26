import { create } from "zustand";

export interface User {
  id: number;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
}

interface AuthStore {
  isAuth: boolean;
  user: User | null;
  setIsAuth: (isAuth: boolean) => void;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuth: false,
  user: null,
  setIsAuth: (isAuth: boolean) => set({ isAuth }),
  setUser: (user: any) => set({ user }),
}));
