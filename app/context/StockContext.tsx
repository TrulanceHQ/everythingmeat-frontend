"use client";
import FallBackStocks from "../allpages/stocks/components/stocks";
import {createContext, useContext, useEffect, useState} from "react";

interface Stock {
    productId: string;
    productName: string;
    productPrice: number;
    totalSlots: number;
    slotsOut?: number;
    category?: string;
    healthSatisfactionImage: string;
}

interface StockContextType {
    stocks: Stock[];
    loading: boolean;
    error: string | null;
}

const StockContext = createContext<StockContextType | undefined>(undefined);

export const StockProvider = ({children}: {children: React.ReactNode}) => {
    const [stocks, setStocks] = useState<Stock[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStocks = async () => {
            const accessToken = localStorage.getItem("accessToken"); //To get the token from localStorage
            console.log(accessToken);
            if (!accessToken) throw new Error("Unauthorized: No access token");
            try {
                const res = await fetch("https://everythingmeat-server.onrender.com/api/v1/products", {
                    headers: {Authorization: `Bearer ${accessToken}`},
                });
                if (!res.ok) throw new Error("Failed to fetch stocks");
                const data = await res.json();
                const stocks = data.data.products;
                setStocks(stocks);
            } catch (err) {
                setError((err as Error).message);
                setStocks(FallBackStocks);
                console.log("Failed to fetch the data");
            } finally {
                setLoading(false);
                console.log("Successfully fetched the data!");
            }
        };

        fetchStocks();
    }, []);

    return <StockContext.Provider value={{stocks, loading, error}}>{children}</StockContext.Provider>;
};

export const useStocks = () => {
    const context = useContext(StockContext);
    if (!context) {
        throw new Error("useStocks must be used within a StockProvider");
    }
    return context;
};
