import { useAuthStore } from "@/_src/entities/auth/model";
import axios, { isAxiosError } from "axios";

export const useDeleteStudent = () => {
  const { setUser } = useAuthStore();

  const handleDeleteStudent = async (email: string) => {
    try {
      await axios.delete("/api/users/tutor/students", {
        data: { studentEmail: email },
      });
      const res = await axios.get("/api/users/me");

      setUser(res.data);
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.error);
      }
      throw new Error("Ошибка при удалении ученика");
    }
  };

  return { handleDeleteStudent };
};
