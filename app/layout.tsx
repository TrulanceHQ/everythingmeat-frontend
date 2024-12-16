import type { Metadata } from "next";
import { roboto } from "./ui/fonts";
import "./globals.css";

// Navbar & Footer
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

export const metadata: Metadata = {
  title: "Everything Meat",
  description:
    "An app for a unique communal meat-sharing experience, fostering connections between buyers and local farmers to select and savor fresh, premium cuts.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`} suppressHydrationWarning>
        <Navbar />
          {children}
        <Footer />
        </body>
    </html>
  )
}
