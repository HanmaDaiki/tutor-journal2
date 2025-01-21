import { useAuthStore } from "@/_src/entities/auth/model";

export function TutorHome() {
  const { user } = useAuthStore();
  
  if (user?.role !== "TUTOR") {
    return null;
  }
  return <></>;
}
