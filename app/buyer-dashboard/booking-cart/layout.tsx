import BookingHeader from "../components/bookingHeader/bookingHeader";
import BookingSummary from "../components/bookingSummary/bookingSummary";
import MobileBooking from "../components/bookingSummary/mobileBooking";

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="bg-gray-100 lg:overflow-hidden">
            <BookingHeader />
            <div className="flex flex-col lg:flex-row gap-1 justify-center flex-auto lg:justify-around h-[528px] w-screen items-start md:items-center  mt-3 mb-6 p-5 bg-white">
                {children}
                <div className="hidden lg:block lg:w-1/4">
                    <BookingSummary />
                </div>
                {/* FOR MOBILE VIEW */}
                <div className="block lg:hidden">
                    <MobileBooking />
                </div>
            </div>
            <div className="bg-gray-100 h-10"></div>
        </div>
    );
}
