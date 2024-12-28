import { useAuthStore } from "@/_src/entities/auth/model";
import axios from "axios";

const useLogout = () => {
  const { setIsAuth, setUser } = useAuthStore();

  const handleLogout = async () => {
    await axios.post("/api/auth/logout");

    setIsAuth(false);
    setUser(null);
  };

  return { handleLogout };
};

export default useLogout;
