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
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-2">
              {children}
            </main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
