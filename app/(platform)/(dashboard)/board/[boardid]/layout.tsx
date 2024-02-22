import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { notFound, redirect } from "next/navigation";
import { BoardNavBar } from "./_components/boardnavbar";

export async function generateMetaData({
  params,
}: {
  params: { boardid: string };
}) {
  const { orgId } = auth();
  if (!orgId) {
    return {
      title: "board",
    };
  }

  const board = await db.board.findUnique({
    where: {
      id: params.boardid,
      orgId,
    },
  });

  return {
    title: board?.title || "Board",
  };
}

const BoardIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { boardid: string };
}) => {
  const { orgId } = auth();
  if (!orgId) {
    redirect("/select-org");
  }
  const board = await db.board.findUnique({
    where: {
      id: params.boardid,
      orgId,
    },
  });

  if (!board) {
    notFound();
  }
  return (
    <div
      className="relative h-full   bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
    >
        <BoardNavBar data = {board}  />
        <div className="absolute inset-0 bg-black/10"/>
      <main className="relative pt-28 h-screen">{children}</main>
    </div>
  );
};

export default BoardIdLayout;
