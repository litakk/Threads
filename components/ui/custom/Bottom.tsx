"use client";

import { GrHomeRounded } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { usePathname, useRouter } from "next/navigation";
import { FaInstagram } from "react-icons/fa";

const icons = [
  { id: "home", path: "/", icon: <GrHomeRounded size={26} /> },
  { id: "search", path: "/search", icon: <IoSearchOutline size={26} /> },
  { id: "create", path: "/#", icon: <IoCreateOutline size={26} /> },
  { id: "likes", path: "/#", icon: <GoHeart size={26} /> },
  { id: "profile", path: "/#", icon: <CgProfile size={26} /> },
];

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../button";

const Bottom: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 flex justify-between  items-center w-full h-[68px] p-5 bg-[#222b26]">
        {icons.map(({ id, icon, path }) => {
          const active = pathname === path;

          if (id === "create" || id === "likes" || id === "profile") {
            return (
              <Drawer key={id}>
                <DrawerTrigger asChild>
                  <button className={`${active ? "text-white" : "text-gray-600"}`}>
                    {icon}
                  </button>
                </DrawerTrigger>
                <DrawerContent className="h-[451px] bg-neutral-900">
                  <DrawerHeader>
                    <DrawerClose  className="w-4 h-4 text-gray-500 text-4xl">
                      <Button className="w-4 h-4 text-gray-500 text-4xl">
                        &times;
                      </Button>
                    </DrawerClose>
                    <DrawerTitle>
                      <IoCreateOutline
                        size={36}
                        className="text-red-500 mx-auto"
                      />
                    </DrawerTitle>
                    <DrawerDescription className="text-white text-2xl font-bold ml-5">
                      Зарегистрируйтесь, чтобы размещать публикации
                    </DrawerDescription>
                    <DrawerDescription className="text-gray-500 ml-5">
                      Присоединяйтесь к Threads, чтобы делиться идеями, задавать
                      вопросы, записывать мысли и делать многое другое.
                    </DrawerDescription>
                    <DrawerTitle>
                      <div className="flex items-center ml-5 gap-3 border border-gray-500 rounded-[13px] mt-8 p-3">
                        <div>
                          <FaInstagram className="bg-red-500" size={36} />
                        </div>
                        <div>
                          <p className="font-bold text-white text-xl">
                            Продолжить с аккаунтом Instagram
                          </p>
                        </div>
                      </div>
                    </DrawerTitle>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button className="text-gray-500">
                      Войти по имени пользователя
                    </Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            );
          }

          return (
            <button
              key={id}
              onClick={() => router.push(path)}
              className={`${active ? "text-white" : "text-gray-600"}`}
            >
              {icon}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Bottom;
