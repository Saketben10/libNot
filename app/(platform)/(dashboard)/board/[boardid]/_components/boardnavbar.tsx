import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { board } from "@prisma/client";
import { BoardTitleForm } from "./boradtitleform";

interface BoardNavbarProps {
  data: board;
}

export const BoardNavBar = async ({ data }: BoardNavbarProps) => {
  return (
    <div className="w-full h-14 z-[40] bg-black/30 fixed top-14 flex items-center px-6 gap-x-4 text-white">
   <  BoardTitleForm data={data}/>
    </div>
  );
};
