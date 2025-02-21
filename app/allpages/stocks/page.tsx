import {StockProvider} from "@/app/context/StockContext";
import StockSection from "./components/stockSection";

const StocksPage = () => {
    return (
        <>
            <StockProvider>
                <StockSection />
            </StockProvider>
        </>
    );
};

export default StocksPage;
