import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PasswordResetSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full space-y-6 bg-white shadow-xl rounded-xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle size={70} className="text-customRed animate-bounce" />
        </div>

        <h2 className="text-2xl font-bold text-gray-800">
          Password Reset Successful
        </h2>

        <p className="text-gray-600 mb-6">
          You have successfully reset your password. You can now log in with
          your new credentials.
        </p>

        <div className="space-y-4">
          <Link href={"/login"}>
            <Button className="bg-customRed"> Go to Login</Button>
          </Link>

          <div className="text-sm text-gray-500">
            If you did not reset your password, please contact support
            immediately.
          </div>
        </div>

        <div className="border-t pt-4 mt-4">
          <a href="/support" className="text-customRed hover:underline text-sm">
            Need Help?
          </a>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetSuccess;
