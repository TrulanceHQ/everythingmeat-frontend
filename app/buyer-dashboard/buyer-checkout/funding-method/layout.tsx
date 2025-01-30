import CheckOutHeader from "../../components/checkoutHeader/checkoutHeader";

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="bg-gray-100 overflow-hidden">
            <CheckOutHeader />
            <div className="flex justify-center items-start  w-screen gap-2">
                <div className=" bg-white mb-8">{children}</div>
            </div>
        </div>
    );
}
