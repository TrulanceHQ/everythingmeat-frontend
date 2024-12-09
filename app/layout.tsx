import type { Metadata } from "next";
import { roboto } from "./ui/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Everything Meat",
  description: "An app for a unique communal meat-sharing experience, fostering connections between buyers and local farmers to select and savor fresh, premium cuts.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
