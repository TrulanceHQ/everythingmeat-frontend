import BookingCompleteHeader from "@/app/allpages/users/buyer/components/bookingCompleteHeader/bookingCompleteHeader";

// Navbar & Footer
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="bg-gray-100 overflow-hidden">
            <BookingCompleteHeader />
            <div className="bg-white w-screen items-center justify-center">{children}</div>
            <div className="bg-gray-100 h-10"></div>
        </div>
    );
}
