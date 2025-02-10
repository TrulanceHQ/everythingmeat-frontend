import { useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "../../store";


export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const setRole = useStore(state => state.setRole);

  const userLogin = async (userCredentials: {
    emailAddress: string;
    password: string;
  }) => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message.message);
        setError(true);
        return;
      }

      const data = await response.json();
      const userRole = data.message.user.role;
      setRole(userRole)
      if (userRole === "admin") {
        router.push("/admin");
      } else if (userRole === "seller") {
        router.push("/seller-dashboard");
      } else if (userRole === "buyer") {
        router.push("/buyer-dashboard");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(true);
      } else {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return { userLogin, setError, loading, error, errorMessage };
}
