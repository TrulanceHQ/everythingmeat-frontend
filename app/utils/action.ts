export const resendOTP = async (email: string) => {
  try {
    const response = await fetch("/api/resend-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( email ),
    });
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error("Error resending OTP:", error);
    throw error;
  }
};
