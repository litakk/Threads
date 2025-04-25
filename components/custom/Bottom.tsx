"use client";

import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { GrHomeRounded } from "react-icons/gr";
import { IoSearchOutline, IoCreateOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { AuthModal } from "./AuthModal";
import { CreatePostModal } from "./CreatePostModal";

const icons = [
  { id: "home", path: "/", icon: <GrHomeRounded size={26} /> },
  { id: "search", path: "/search", icon: <IoSearchOutline size={26} /> },
  { id: "create", icon: <IoCreateOutline size={26} /> },
  { id: "likes", path: "/likes", icon: <GoHeart size={26} /> },
  { id: "profile", path: "/profile", icon: <CgProfile size={26} /> },
];

const Bottom: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="md:hidden fixed bottom-0 left-0 flex justify-between items-center w-full h-[68px] p-5 bg-[#222b26]">
      {icons.map(({ id, path, icon }) => {
        const isActive = pathname === path;

        if (id === "home" || id === "search") {
          return (
            <button
              key={id}
              onClick={() => router.push(path!)}
              className={isActive ? "text-white" : "text-gray-600"}
            >
              {icon}
            </button>
          );
        }

        if (id === "create") {
          return (
            <Drawer key={id}>
              <DrawerTrigger asChild>
                <button className="text-gray-600">{icon}</button>
              </DrawerTrigger>
              {session ? <CreatePostModal /> : <AuthModal />}
            </Drawer>
          );
        }

        return (
          <Drawer key={id}>
            <DrawerTrigger asChild>
              <button
                className={isActive ? "text-white" : "text-gray-600"}
                onClick={() => {
                  if (session) {
                    router.push(path!);
                  }
                }}
              >
                {icon}
              </button>
            </DrawerTrigger>
            {!session && <AuthModal />}
          </Drawer>
        );
      })}
    </div>
  );
};

export default Bottom;
