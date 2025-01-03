import { useAuthStore } from "@/_src/entities/auth/model";
import axios, { isAxiosError } from "axios";

export const useAddNewStudent = () => {
  const { setUser } = useAuthStore();

  const handleAddNewStudent = async (email: string) => {
    try {
      await axios.post("/api/users/tutor/students", { studentEmail: email });
      const res = await axios.get("/api/users/me");

      setUser(res.data);
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.error);
      }
      throw new Error("Ошибка при добавлении ученика");
    }
  };

  return { handleAddNewStudent };
};
