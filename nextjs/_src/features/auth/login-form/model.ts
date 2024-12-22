import { useAuthStore } from "@/_src/entities/auth/model";

export interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const { setIsAuth } = useAuthStore();

  const handleLogin = async (data: LoginData) => {
    try {
      await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setIsAuth(true);
    } catch (error) {
      throw new Error("Ошибка входа " + error);
    }
  };

  return { handleLogin };
};
