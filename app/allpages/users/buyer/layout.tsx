import BuyerHeader from "@/app/allpages/users/buyer/components/buyerHeader/BuyerHeader";
import SideNavbar from "@/app/allpages/users/buyer/components/sideNavbar/SideNavbar";
import "./globals.css";

// Navbar & Footer
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="bg-gray-100 overflow-hidden">
            <BuyerHeader />
            <div className="flex flex-col lg:flex-row gap-1 justify-around min-h-[500px] w-screen items-start mt-3 mb-6 py-4 pl-4 bg-white">
                <SideNavbar />
                {children}
            </div>
            <div className="bg-gray-100 h-10"></div>
        </div>
    );
}
