"use client";

import { GrHomeRounded } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { usePathname, useRouter } from "next/navigation";
import { RiInstagramLine } from "react-icons/ri";
import { useState } from "react";

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
      <ul className="flex flex-col gap-10 text-[#6B6B6B]">
        <li>
          <button
            onClick={() => router.push("/")}
            className={pathname === "/" ? "text-white" : ""}
          >
            <GrHomeRounded size={26} />
          </button>
        </li>
        <li>
          <button
            onClick={() => router.push("/search")}
            className={pathname === "/search" ? "text-white" : ""}
          >
            <IoSearchOutline size={26} />
          </button>
        </li>
        <li>
          <button onClick={handleProtectedClick}>
            <IoMdAdd size={26} />
          </button>
        </li>
        <li>
          <button onClick={handleProtectedClick}>
            <GoHeart size={26} />
          </button>
        </li>
        <li>
          <button onClick={handleProtectedClick}>
            <CgProfile size={26} />
          </button>
        </li>
      </ul>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          <div className="relative z-10 w-[310px] bg-[#101010] max-h-[100%] rounded-2xl py-7 px-2.5 mt-10">
            <h2 className="text-white font-bold text-xl leading-5 text-center">
              Войдите или <br /> зарегистрируйтесь в Threads
            </h2>
            <p className="text-center text-[15px] text-[#777777] mt-3 font-normal">
              Узнавайте, о чем говорят люди, и вступайте в разговоры.
            </p>
            <button className="w-full py-6 px-5 cursor-pointer bg-[#080808] text-start leading-5 gap-2 rounded-2xl flex items-center text-[white] text-[16px] font-semibold mt-6">
              <RiInstagramLine className="text-[24px]" />
              Продолжить с аккаунтом <br /> Instagram
            </button>
            <p className="text-center text-[#777777] mt-6 font-normal cursor-pointer">
              Войти по имени пользователя
            </p>
          </div>
        </div>
      )}
    </>
  );
}