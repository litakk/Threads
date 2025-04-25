import { DrawerContent, DrawerHeader, DrawerClose, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { FaInstagram } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

export const AuthModal = () => {
  const router = useRouter();

  return (
    <DrawerContent className="h-[451px] bg-neutral-900">
      <DrawerHeader>
        <DrawerClose>
          <Button variant="ghost" className="text-4xl text-gray-500">&times;</Button>
        </DrawerClose>
        <DrawerTitle><IoCreateOutline size={36} className="text-red-500 mx-auto" /></DrawerTitle>
        <DrawerDescription className="text-white text-2xl font-bold ml-5">
          Зарегистрируйтесь, чтобы продолжить
        </DrawerDescription>
        <DrawerDescription className="text-gray-500 ml-5">
          Присоединяйтесь к нашему сервису, чтобы получить полный доступ.
        </DrawerDescription>
        <DrawerTitle>
          <div 
            className="flex items-center ml-5 gap-3 border border-gray-500 rounded-[13px] mt-8 p-3"
            onClick={() => router.push('/signup')}
          >
            <FaInstagram className="bg-red-500" size={36} />
            <p className="font-bold text-white text-xl">Зарегистрироваться</p>
          </div>
        </DrawerTitle>
      </DrawerHeader>
      <DrawerFooter>
        <Button onClick={() => router.push('/login')} className="text-gray-500">
          Войти
        </Button>
      </DrawerFooter>
    </DrawerContent>
  );
};