import axios, { isAxiosError } from "axios";

interface SignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
}

export const useSignup = () => {
  const handleSignup = async (data: SignupData) => {
    try {
      await axios.post("/api/auth/signup", data);
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data.error || "Ошибка регистрации");
      }
      throw new Error("Ошибка регистрации");
    }
  };

  return { handleSignup };
};
