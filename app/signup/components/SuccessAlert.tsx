import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// type Props = {
//   errorMessage: string;
//   onDismiss: () => void;
// };

const Success = () => {
    const router = useRouter();

    useEffect(() => {
      const timer = setTimeout(() => {
        router.push("/login");
      }, 5000); // 5 seconds
  
      return () => clearTimeout(timer);
    }, [router]);
  return (
    <Alert variant="default">
      <AlertTitle className="text-2xl font-bold text-green-800">Verification Successful!</AlertTitle>
      <AlertDescription>
      <p className="mt-4 text-green-700">
        You are being redirected to the login page. If you are not redirected,{" "}
        <Link href="/login" className="text-blue-500 underline">
          click here to login
        </Link>
      </p>
      </AlertDescription>
    </Alert>
  );
};

export default Success;
