import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

import { Button } from "@/components/ui/button";

import Navigation from "@/components/custom/Navigation";
import Bottom from "@/components/custom/Bottom";

import { IoMdArrowBack } from "react-icons/io";
import { FaThreads } from "react-icons/fa6";
import { ThemeProvider } from "@/components/theme-provider";
import SessionProvider from "@/components/custom/SessionProvider";
import { getServerSession } from "next-auth";
import NavMenu from "@/components/custom/NavMenu";
import BurgerMenu from "@/components/custom/MobileBurgerAfter";


export const metadata: Metadata = {
  title: "Threads",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased w-full min-h-screen`}>
        <SessionProvider session={session}>
          <div className="flex flex-col md:flex-row w-full items-end">
            <div className="flex justify-between items-center p-5 md:hidden w-full">
              <div className="flex-1">
                <IoMdArrowBack size={26} className="hidden text-white" />
              </div>

              <div className="flex-1 flex justify-center">
                <FaThreads size={34} className="text-white" />
              </div>

              {!session ? (
                <div className="flex-1 flex justify-end">
                  <Link href={"/api/auth/signin"}>
                    <Button className="w-[78px] h-[34px] text-black bg-white font-bold rounded-[10px]">
                      Войти
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex-1 flex justify-end">
                  <BurgerMenu/>
                </div>
              )}
            </div>

            <aside className="hidden md:flex flex-col justify-between h-screen w-fit px-4 py-6">
              <Link href="/" className="">
                <div className="flex justify-center ">
                  <FaThreads color="white" size={37} />
                </div>
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
                <NavMenu />
                {children}
              </ThemeProvider>
            </main>
          </div>

          <Bottom />
        </SessionProvider>
      </body>
    </html>
  );
}
