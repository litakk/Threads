
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AiOutlineLink } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
interface PostProps {

}

const Post: React.FC<PostProps> = () => {
    return (
        <>

            <div className="flex w-full gap-4 mb-6">
                <Avatar className="w-[36px] h-[36px] rounded-2xl">
                    <AvatarImage className="rounded-3xl" src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="w-full ">
                    <div className="flex items-center justify-between w-full gap-4">
                        <p className="text-[16px] font-semibold">user <span className="font-normal text-[#777777] ml-1">9 ч.</span></p>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="cursor-pointer pt-1"><BsThreeDots color="#777777" size={20} /></DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#181818] w-[200px] p-2 text-white  border-0 rounded-2xl">
                                <DropdownMenuLabel className="flex cursor-pointer justify-between items-center">Копировать ссылку <AiOutlineLink size={25} /></DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                    <p className=" font-normal text-white text-[16px] w-[97%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <div className="flex gap-5 mt-2">
                        <div className="flex items-center  animate gap-1 hover:scale-[1.1] cursor-pointer ">
                            <IoIosHeartEmpty size={20} color="#a6a6a6" />
                            <span className="text-sm">1390</span>
                        </div>

                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <FaRegComment size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">19</span>
                        </div>
                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <BiRepost size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">1</span>
                        </div>
                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <LuSend size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">13</span>
                        </div>

                    </div>
                    <hr className="mt-6 w-[calc(100%+6rem)] -ml-20 border-0 h-[1px] bg-[#383939]"/>
                </div>
            </div>
            <div className="flex w-full gap-4 mb-6">
                <Avatar className="w-[36px] h-[36px] rounded-2xl">
                    <AvatarImage className="rounded-3xl" src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="w-full ">
                    <div className="flex items-center justify-between w-full gap-4">
                        <p className="text-[16px] font-semibold">user <span className="font-normal text-[#777777] ml-1">9 ч.</span></p>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="cursor-pointer pt-1"><BsThreeDots color="#777777" size={20} /></DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#181818] w-[200px] p-2 text-white  border-0 rounded-2xl">
                                <DropdownMenuLabel className="flex cursor-pointer justify-between items-center">Копировать ссылку <AiOutlineLink size={25} /></DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                    <p className=" font-normal text-white text-[16px] w-[97%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <div className="flex gap-5 mt-2">
                        <div className="flex items-center  animate gap-1 hover:scale-[1.1] cursor-pointer ">
                            <IoIosHeartEmpty size={20} color="#a6a6a6" />
                            <span className="text-sm">1390</span>
                        </div>

                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <FaRegComment size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">19</span>
                        </div>
                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <BiRepost size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">1</span>
                        </div>
                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <LuSend size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">13</span>
                        </div>

                    </div>
                    <hr className="mt-6 w-[calc(100%+6rem)] -ml-20 border-0 h-[1px] bg-[#383939]"/>
                </div>
            </div>
            <div className="flex w-full gap-4 mb-6">
                <Avatar className="w-[36px] h-[36px] rounded-2xl">
                    <AvatarImage className="rounded-3xl" src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="w-full ">
                    <div className="flex items-center justify-between w-full gap-4">
                        <p className="text-[16px] font-semibold">user <span className="font-normal text-[#777777] ml-1">9 ч.</span></p>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="cursor-pointer pt-1"><BsThreeDots color="#777777" size={20} /></DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#181818] w-[200px] p-2 text-white  border-0 rounded-2xl">
                                <DropdownMenuLabel className="flex cursor-pointer justify-between items-center">Копировать ссылку <AiOutlineLink size={25} /></DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                    <p className=" font-normal text-white text-[16px] w-[97%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <div className="flex gap-5 mt-2">
                        <div className="flex items-center  animate gap-1 hover:scale-[1.1] cursor-pointer ">
                            <IoIosHeartEmpty size={20} color="#a6a6a6" />
                            <span className="text-sm">1390</span>
                        </div>

                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <FaRegComment size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">19</span>
                        </div>
                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <BiRepost size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">1</span>
                        </div>
                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <LuSend size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">13</span>
                        </div>

                    </div>
                    <hr className="mt-6 w-[calc(100%+6rem)] -ml-20 border-0 h-[1px] bg-[#383939]"/>
                </div>
            </div>
            <div className="flex w-full gap-4 mb-6">
                <Avatar className="w-[36px] h-[36px] rounded-2xl">
                    <AvatarImage className="rounded-3xl" src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="w-full ">
                    <div className="flex items-center justify-between w-full gap-4">
                        <p className="text-[16px] font-semibold">user <span className="font-normal text-[#777777] ml-1">9 ч.</span></p>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="cursor-pointer pt-1"><BsThreeDots color="#777777" size={20} /></DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#181818] w-[200px] p-2 text-white  border-0 rounded-2xl">
                                <DropdownMenuLabel className="flex cursor-pointer justify-between items-center">Копировать ссылку <AiOutlineLink size={25} /></DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                    <p className=" font-normal text-white text-[16px] w-[97%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <div className="flex gap-5 mt-2">
                        <div className="flex items-center  animate gap-1 hover:scale-[1.1] cursor-pointer ">
                            <IoIosHeartEmpty size={20} color="#a6a6a6" />
                            <span className="text-sm">1390</span>
                        </div>

                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <FaRegComment size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">19</span>
                        </div>
                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <BiRepost size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">1</span>
                        </div>
                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <LuSend size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">13</span>
                        </div>

                    </div>
                    <hr className="mt-6 w-[calc(100%+6rem)] -ml-20 border-0 h-[1px] bg-[#383939]"/>
                </div>
            </div>
            <div className="flex w-full gap-4 mb-6">
                <Avatar className="w-[36px] h-[36px] rounded-2xl">
                    <AvatarImage className="rounded-3xl" src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="w-full ">
                    <div className="flex items-center justify-between w-full gap-4">
                        <p className="text-[16px] font-semibold">user <span className="font-normal text-[#777777] ml-1">9 ч.</span></p>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="cursor-pointer pt-1"><BsThreeDots color="#777777" size={20} /></DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#181818] w-[200px] p-2 text-white  border-0 rounded-2xl">
                                <DropdownMenuLabel className="flex cursor-pointer justify-between items-center">Копировать ссылку <AiOutlineLink size={25} /></DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                    <p className=" font-normal text-white text-[16px] w-[97%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eaque laboriosam quos molestiae dignissimos vitae.</p>
                    <div className="flex gap-5 mt-2">
                        <div className="flex items-center  animate gap-1 hover:scale-[1.1] cursor-pointer ">
                            <IoIosHeartEmpty size={20} color="#a6a6a6" />
                            <span className="text-sm">2500</span>
                        </div>

                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <FaRegComment size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">10</span>
                        </div>
                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <BiRepost size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">5</span>
                        </div>
                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <LuSend size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">25</span>
                        </div>

                    </div>
                    <hr className="mt-6 w-[calc(100%+6rem)] -ml-20 border-0 h-[1px] bg-[#383939]"/>
                </div>
            </div>
            <div className="flex w-full gap-4 mb-6">
                <Avatar className="w-[36px] h-[36px] rounded-2xl">
                    <AvatarImage className="rounded-3xl" src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="w-full ">
                    <div className="flex items-center justify-between w-full gap-4">
                        <p className="text-[16px] font-semibold">user <span className="font-normal text-[#777777] ml-1">9 ч.</span></p>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="cursor-pointer pt-1"><BsThreeDots color="#777777" size={20} /></DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#181818] w-[200px] p-2 text-white  border-0 rounded-2xl">
                                <DropdownMenuLabel className="flex cursor-pointer justify-between items-center">Копировать ссылку <AiOutlineLink size={25} /></DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                    <p className=" font-normal text-white text-[16px] w-[97%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi, fuga molestias fugiat dolores tempora explicabo quis laudantium eum asperiores.</p>
                    <div className="flex gap-5 mt-2">
                        <div className="flex items-center  animate gap-1 hover:scale-[1.1] cursor-pointer ">
                            <IoIosHeartEmpty size={20} color="#a6a6a6" />
                            <span className="text-sm">3300</span>
                        </div>

                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <FaRegComment size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">50</span>
                        </div>
                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <BiRepost size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">13</span>
                        </div>
                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <LuSend size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">190</span>
                        </div>

                    </div>
                    <hr className="mt-6 w-[calc(100%+6rem)] -ml-20 border-0 h-[1px] bg-[#383939]"/>
                </div>
            </div>
            <div className="flex w-full gap-4 mb-6">
                <Avatar className="w-[36px] h-[36px] rounded-2xl">
                    <AvatarImage className="rounded-3xl" src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="w-full ">
                    <div className="flex items-center justify-between w-full gap-4">
                        <p className="text-[16px] font-semibold">user <span className="font-normal text-[#777777] ml-1">9 ч.</span></p>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="cursor-pointer pt-1"><BsThreeDots color="#777777" size={20} /></DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#181818] w-[200px] p-2 text-white  border-0 rounded-2xl">
                                <DropdownMenuLabel className="flex cursor-pointer justify-between items-center">Копировать ссылку <AiOutlineLink size={25} /></DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                    <p className=" font-normal text-white text-[16px] w-[97%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <div className="flex gap-5 mt-2">
                        <div className="flex items-center  animate gap-1 hover:scale-[1.1] cursor-pointer ">
                            <IoIosHeartEmpty size={20} color="#a6a6a6" />
                            <span className="text-sm">1390</span>
                        </div>

                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <FaRegComment size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">19</span>
                        </div>
                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <BiRepost size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">1</span>
                        </div>
                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <LuSend size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">13</span>
                        </div>

                    </div>
                    <hr className="mt-6 w-[calc(100%+6rem)] -ml-20 border-0 h-[1px] bg-[#383939]"/>
                </div>
            </div>
            <div className="flex w-full gap-4 mb-6">
                <Avatar className="w-[36px] h-[36px] rounded-2xl">
                    <AvatarImage className="rounded-3xl" src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="w-full ">
                    <div className="flex items-center justify-between w-full gap-4">
                        <p className="text-[16px] font-semibold">user <span className="font-normal text-[#777777] ml-1">9 ч.</span></p>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="cursor-pointer pt-1"><BsThreeDots color="#777777" size={20} /></DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#181818] w-[200px] p-2 text-white  border-0 rounded-2xl">
                                <DropdownMenuLabel className="flex cursor-pointer justify-between items-center">Копировать ссылку <AiOutlineLink size={25} /></DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                    <p className=" font-normal text-white text-[16px] w-[97%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <div className="flex gap-5 mt-2">
                        <div className="flex items-center  animate gap-1 hover:scale-[1.1] cursor-pointer ">
                            <IoIosHeartEmpty size={20} color="#a6a6a6" />
                            <span className="text-sm">1390</span>
                        </div>

                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <FaRegComment size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">19</span>
                        </div>
                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <BiRepost size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">1</span>
                        </div>
                        <div className="flex items-center gap-1 animate hover:scale-[1.1] cursor-pointer ">
                            <LuSend size={20} color="#a6a6a6" className="" />
                            <span className="text-sm">13</span>
                        </div>

                    </div>
                    <hr className="mt-6 w-[calc(100%+6rem)] -ml-20 border-0 h-[1px] bg-[#383939]"/>
                </div>
            </div>

        </>
    );
}

export default Post;
