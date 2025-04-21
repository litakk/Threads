"use client";

import { GrHomeRounded } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { usePathname, useRouter } from "next/navigation";
import { RiInstagramLine, RiMenu4Line } from "react-icons/ri";
import { useState } from "react";

import { MdOutlinePushPin } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProtectedClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ul className="flex flex-col items-center gap-3.5 text-[#6B6B6B]">
        <li className="hover:bg-[#171717] duration-300 w-[60px] h-[50px] rounded-[12px] flex items-center justify-center active:scale-90">
          <button
            onClick={() => router.push("/")}
            className={pathname === "/" ? "text-white" : ""}
          >
            <GrHomeRounded size={26} />
          </button>
        </li>
        <li className="hover:bg-[#171717] duration-300 w-[60px] h-[50px] rounded-[12px] flex items-center justify-center active:scale-90">
          <button
            onClick={() => router.push("/search")}
            className={pathname === "/search" ? "text-white" : ""}
          >
            <IoSearchOutline size={26} />
          </button>
        </li>
        <li className="bg-[#171717] w-[60px] h-[50px] rounded-[12px] flex items-center justify-center hover:text-white duration-300 active:scale-90">
          <button onClick={handleProtectedClick}>
            <IoMdAdd size={26} />
          </button>
        </li>
        <li className="hover:bg-[#171717] duration-300 w-[60px] h-[50px] rounded-[12px] flex items-center justify-center active:scale-90">
          <button onClick={handleProtectedClick}>
            <GoHeart size={26} />
          </button>
        </li>
        <li className="hover:bg-[#171717] duration-300 w-[60px] h-[50px] rounded-[12px] flex items-center justify-center active:scale-90">
          <button onClick={handleProtectedClick}>
            <CgProfile size={26} />
          </button>
        </li>
      </ul>

      <div className="flex flex-col gap-1">
        <button
          onClick={handleProtectedClick}
          className="hover:bg-[#171717] duration-300 w-[60px] h-[50px] rounded-[12px] flex items-center justify-center active:scale-90"
        >
          <MdOutlinePushPin size={26} className="text-[#6B6B6B]" />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              tabIndex={0}
              className="group hover:bg-[#171717] duration-300 w-[60px] h-[50px] rounded-[12px] flex items-center justify-center active:scale-90"
            >
              <RiMenu4Line
                size={26}
                className="text-[#6B6B6B] focus:text-white"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Внешний Вид</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Сообщить о проблеме</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0  bg-opacity-50 backdrop-blur-[2px]"
            onClick={closeModal}
          ></div>

          <div className="relative z-10 w-[520px] h-[355px] bg-[#101010] rounded-2xl py-7 px-2.5 mt-10">
            <h2 className="text-white font-bold text-3xl leading-5 text-center mt-8">
              Попробуйте Threads
            </h2>
            <p className="text-center text-[15px] text-[#777777] mt-3 font-normal">
              Присоединяйтесь к Threads, чтобы <br /> делиться мыслями, быть в
              курсе событий, <br /> подписываться на знакомых и делать <br />{" "}
              многое другое.
            </p>
            <button className="w-full py-6 px-5 cursor-pointer bg-[#101010] text-center leading-5 gap-2 rounded-2xl flex items-center justify-center text-[white] text-[16px] font-semibold mt-10">
              <RiInstagramLine className="text-[24px]" />
              Продолжить с аккаунтом Instagram
            </button>
          </div>
        </div>
      )}
    </>
  );
}
