import "@/app/global.css";
import { Metadata } from "next";
import Header from "@/components/Header";
import { SessionProvider } from "next-auth/react";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Cinema Guru | Atlas School",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#00003c] text-white">
        <SessionProvider>
          <Header />
          <Sidebar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
