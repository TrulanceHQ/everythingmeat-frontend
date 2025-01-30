import BuyerHeader from "@/app/buyer-dashboard/components/buyerHeader/BuyerHeader";
import SideNavbar from "@/app/buyer-dashboard/components/sideNavbar/SideNavbar";
import "./globals.css";
import MobileNavbar from "../components/sideNavbar/MobileNavbar";

// Navbar & Footer
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="bg-gray-100 lg:overflow-hidden">
            <BuyerHeader />
            <div className="w-screen m-auto p-4 bg-white">
                {/* MOBILE NAVBAR */}
                <div className="w-full p-3 flex justify-end lg:!hidden">
                    <MobileNavbar />
                </div>
                <div className="flex flex-col lg:flex-row gap-1 w-full justify-evenly min-h-[500px]">
                    {/* LAPTOP NAVBAR */}
                    <div className="w-[30%] hidden lg:flex justify-center items-center">
                        <SideNavbar />
                    </div>
                    {/* CONTENT */}
                    <div className="lg:w-[70%] w-full flex justify-center items-center flex-1">{children}</div>
                </div>
            </div>
            <div className="bg-gray-100 h-10"></div>
        </div>
    );
}
