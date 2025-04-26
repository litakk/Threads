import { Input } from "@/components/ui/input";
import { Metadata } from "next";
import { MdSearch } from "react-icons/md";

interface PageProps {}

export const metadata: Metadata = {
  title: "Поиск — Threads",
};

const Page: React.FC<PageProps> = () => {
  return (
    <>

      <div className="relative w-[90%]  text-white border-gray-500 mx-auto">
        <MdSearch
          size={20}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        <Input
          placeholder="Поиск"
          className="w-full pl-12 rounded-xl border-none bg-[#1C1E21] focus:outline-none"
        />
      </div>
    </>
  );
};

export default Page;
