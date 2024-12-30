import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import React, { useEffect } from "react";

type Props = {
  errorMessage: string;
  onDismiss: () => void;
};

const ErrorAlert = ({ errorMessage, onDismiss }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [onDismiss]);
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        <p>{errorMessage}</p>
      </AlertDescription>
    </Alert>
  );
};

export default ErrorAlert;
