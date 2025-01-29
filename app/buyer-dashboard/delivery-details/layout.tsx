import CheckOutHeader from "../components/checkoutHeader/checkoutHeader";
import BookingSummary from "../components/bookingSummary/bookingSummary";

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="bg-gray-100 overflow-hidden">
            <CheckOutHeader />
            <div className="flex flex-col lg:flex-row gap-1 justify-center flex-auto lg:justify-around h-fit w-screen items-start md:items-center mb-6 bg-white">
                {children}
                <BookingSummary />
            </div>
            <div className="bg-gray-100 h-10"></div>
        </div>
    );
}
