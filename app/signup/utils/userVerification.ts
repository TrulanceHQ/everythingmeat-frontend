import { useState } from "react";

const useUserVerification = () => {
    const [verificationLoading, setVerificationLoading] = useState(false);
    
    const verifyUser = async (payload: {emailAddress: string, code: string}) => {
        setVerificationLoading(true);
        try {
        const response = await fetch(`/api/verifyUser`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            const errorData = await response.json();
            setVerificationLoading(false);
            return errorData.message;
        }
        const data = await response.json();
        setVerificationLoading(false);
        return data.message;
        } catch (error) {
        console.error('Error verifying user:', error);
        throw error;
        }
    };
    
    return { verifyUser, verificationLoading };
    }
export default useUserVerification;