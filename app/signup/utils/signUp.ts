import { useState } from "react";

export function useSignUp() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const signUpNewUser = async (userData: {
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
    role: string;
  }) => {
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message.message);
        setError(true);
        return;
      }

      await response.json();
      setSuccess(true);
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

  return { signUpNewUser,setError, loading, success, error, errorMessage };
}