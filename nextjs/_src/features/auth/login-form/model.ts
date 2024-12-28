import { useAuthStore } from "@/_src/entities/auth/model";
import axios, { isAxiosError } from "axios";

export interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const { setIsAuth, setUser } = useAuthStore();

  const handleLogin = async (data: LoginData) => {
    try {
      await axios.post("/api/auth/login", data);
      const res = await axios.get("/api/users/me", {
        headers: { "Content-Type": "application/json" },
      });
      
      setUser(res.data);
      setIsAuth(true);
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.error);
      }
      throw new Error("Ошибка при входе");
    }
  };

  return { handleLogin };
};
