"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineAnalytics } from "react-icons/md";

interface PageProps {
  children?: React.ReactNode;
}

const Page: React.FC<PageProps> = ({children}) => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const isBase = pathname === "/profile";
  const isReplies = pathname === "/profile/replies";
  const isReposts = pathname === "/profile/reposts";

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between">
        <div>
          <p className="text-2xl font-bold">{session?.user?.name}</p>
          <div>
            <p className="text-normal font-bold">{session?.user?.name}</p>
          </div>
        </div>

        <div>
          <Avatar className="w-full h-[70px]">
            <AvatarImage
              className="rounded-full w-full"
              src={session?.user?.image || ""}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div className="flex gap-2">
          <div className="flex">
            <Avatar className="w-[15px] h-[15px]">
              <AvatarImage
                className="rounded-full w-full"
                src={session?.user?.image || ""}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-[15px] h-[15px]">
              <AvatarImage
                className="rounded-full w-full"
                src={session?.user?.image || ""}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-[15px] h-[15px]">
              <AvatarImage
                className="rounded-full w-full"
                src={session?.user?.image || ""}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-[15px] text-gray-500">17 подписчиков</div>
        </div>

        <div className="">
          <MdOutlineAnalytics size={26} />
        </div>
      </div>

      <div className="mt-5">
        <Button className="bg-[#101010] text-twhite border-[2px] border-white-600 w-full">
          Редактировать профиль
        </Button>
      </div>

      <div>
        <div className="flex items-center justify-between border-b mt-6 w-full">
          <Link
            href="/profile"
            className={`pb-2 px-4 ${
              isBase ? "border-b-2 border-black font-medium" : "text-gray-500"
            }`}
          >
            Ветки
          </Link>
          <Link
            href="/profile/replies"
            className={`pb-2 px-4 ${
              isReplies
                ? "border-b-2 border-black font-medium"
                : "text-gray-500"
            }`}
          >
            Ответы
          </Link>
          <Link
            href="/profile/reposts"
            className={`pb-2 px-4 ${
              isReposts
                ? "border-b-2 border-black font-medium"
                : "text-gray-500"
            }`}
          >
            Репосты
          </Link>
        </div>

        <div className="p-5 mx-auto">
          {children || (
            <div>
              <p>ветки</p>
            </div>
          )}
          </div>
      </div>
    </div>
  );
};

export default Page;
