import CheckOutHeader from "../components/checkoutHeader/checkoutHeader";
import BookingSummary from "../components/bookingSummary/bookingSummary";
import MobileBooking from "../components/bookingSummary/mobileBooking";
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="bg-gray-100 overflow-hidden">
            <CheckOutHeader />
            {/* FOR MOBILE VIEW */}
            <div className="flex p-3 lg:hidden">
                <MobileBooking />
            </div>
            <div className="flex flex-row gap-1 justify-center flex-wrap lg:justify-around h-fit items-start md:items-center mb-6 bg-white w-full">
                {children}
                <div className="hidden lg:block">
                    <BookingSummary />
                </div>
            </div>
            <div className="bg-gray-100 h-10"></div>
        </div>
    );
}
