import {useState} from "react";

const useCreateCart = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const createCart = async (cart: any): Promise<void> => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch("/api/cart/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cart),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to create cart");
            }

            setSuccess(true);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return {createCart, loading, error, success};
};

export default useCreateCart;
