import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { TwentyFirstToolbar } from "@21st-extension/toolbar-next"; // For 21st.dev
import { ReactPlugin } from "@21st-extension/react";  // For 21st.dev

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cataleex",
  description: "Your web3 community development agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased bg-black`}
      >
        {children}
        <TwentyFirstToolbar config={{ plugins: [ReactPlugin] }} /> /* For 21st.dev */
      </body>
    </html>
  );
}
