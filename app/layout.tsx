import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

import { Button } from "@/components/ui/button";

import Navigation from "@/components/ui/custom/Navigation";
import Bottom from "@/components/ui/custom/Bottom";

import { IoMdArrowBack } from "react-icons/io";
import { FaThreads } from "react-icons/fa6";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Threads",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased w-full min-h-screen`}>
        <div className="flex flex-col md:flex-row w-full items-end">
          <div className="flex justify-between items-center p-5 md:hidden w-full">
            <div className="flex-1">
              <IoMdArrowBack size={26} className="hidden text-white" />
            </div>

            <div className="flex-1 flex justify-center">
              <FaThreads size={34} className="text-white" />
            </div>

            <div className="flex-1 flex justify-end">
              <Button
                className="w-[78px] h-[34px] text-black bg-white font-bold rounded-[10px]"
              >
                Войти
              </Button>
            </div>
          </div>

          <aside className="hidden md:flex flex-col justify-between h-screen w-fit px-4 py-6">
            <Link href="/" className="w-[60px] h-[50px]">
              <FaThreads color="white" size={37} />
            </Link>

            <Navigation />
          </aside>

          <main className="max-w-[638px] w-full mx-auto bg-[#0a0a0a]  border border-[#2d2d2d] h-[90vh] rounded-2xl overflow-y-auto hide-scrollbar p-5">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </main>
        </div>

        <Bottom />
      </body>
    </html>
  );
}
