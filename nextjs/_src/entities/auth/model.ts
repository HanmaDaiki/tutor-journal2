import { create } from "zustand";

export interface User {
  id: number;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  tutors: User[];
  students: User[];
}

interface AuthStore {
  isAuth: boolean;
  user: User | null;
  setIsAuth: (isAuth: boolean) => void;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuth: false,
  user: null,
  setIsAuth: (isAuth: boolean) => set({ isAuth }),
  setUser: (user) => set({ user }),
}));
