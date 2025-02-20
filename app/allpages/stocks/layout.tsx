import {StockProvider} from "@/app/context/StockContext";

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div>
            <StockProvider>{children}</StockProvider>
        </div>
    );
}
