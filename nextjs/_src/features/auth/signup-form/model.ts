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
      await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (error) {
      throw new Error("Ошибка входа " + error);
    }
  };

  return { handleSignup };
};
