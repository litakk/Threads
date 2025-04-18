import type { Metadata } from "next";
import "./globals.css";
import { IoMdArrowBack } from "react-icons/io";
import { FaThreads } from "react-icons/fa6";
import { MdOutlinePushPin } from "react-icons/md";
import { RiInstagramLine, RiMenu4Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import Bottom from "@/components/ui/custom/Bottom";
import Link from "next/link";
import Navigation from "@/components/ui/custom/Navigation";

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
    <html lang="en">
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
                variant="outline"
                className="w-[78px] h-[34px] text-black font-bold rounded-[10px]"
              >
                Войти
              </Button>
            </div>
          </div>

          <aside className="hidden md:flex flex-col justify-between h-screen w-fit px-4 py-6">
            <Link href="/">
              <FaThreads color="white" size={37} />
            </Link>
            <nav>
              <Navigation />
            </nav>
            <div className="flex flex-col gap-5">
              <MdOutlinePushPin size={26} className="text-[#6B6B6B]" />
              <RiMenu4Line size={26} className="text-[#6B6B6B]" />
            </div>
          </aside>

          <main className="max-w-[638px] w-full mx-auto bg-[#181818] h-[90vh] rounded-2xl overflow-y-auto hide-scrollbar p-5">
            {children}
          </main>
        </div>

        <Bottom />
      </body>
    </html>
  );
}
