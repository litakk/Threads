import { DrawerContent, DrawerHeader, DrawerClose, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "../ui/button";

export const CreatePostModal = () => (
  <DrawerContent className="h-[451px] bg-neutral-900">
    <DrawerHeader>
      <DrawerClose>
        <Button variant="ghost" className="text-4xl text-gray-500">&times;</Button>
      </DrawerClose>
      <DrawerTitle className="text-white text-2xl font-bold text-center">
        Создать новый пост
      </DrawerTitle>
      <div className="mt-4 p-4">
        <textarea 
          className="w-full bg-neutral-800 text-white p-2 rounded"
          placeholder="Что у вас нового?"
          rows={5}
        />
        <Button className="mt-4 w-full bg-blue-500 hover:bg-blue-600">
          Опубликовать
        </Button>
      </div>
    </DrawerHeader>
  </DrawerContent>
);