
import { useEffect, useState } from "react";


export const useFetchStockList = ({ pageNumber }: { pageNumber: number }) => {
    const [products, setProducts] = useState([]);
    
    const fetchStockList = async ({ pageNumber }: { pageNumber: number }): Promise<void> => {
        const response = await fetch(`/api/stocks/getAllProducts?page=${pageNumber}&limit=10`);
        const data = await response.json();
        console.log(data)
        setProducts(data.products);
        console.log(products)
    }

    useEffect(() => {
        fetchStockList({ pageNumber });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber]);

    return  products;
};