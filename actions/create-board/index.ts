"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./type";
import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-actions";
import { CreateBoard as createboard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId ,orgId} = auth();
  if (!userId  ||  !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, image } = data;
  let board;

const [imageId,imageThumbUrl,imageFullUrl,imageUserName,imageLinkHTML] = image.split('|')

console.log({
  title,
  orgId,
  imageId,
  imageThumbUrl,
  imageFullUrl,
  imageUserName,
  imageLinkHTML

})

if(!imageId || !imageFullUrl || !imageLinkHTML || !imageUserName || !imageThumbUrl){
  return {
    error : 'Missing Fields : Failed to create Board'
  }
}

  try {
    
    board = await db.board.create({
      data: {
        title,
        orgId,
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageUserName,
        imageLinkHTML
        
      },
    });
  } catch (error) {
    return {
      error: "Failed to create",
    };
  }

  revalidatePath(`/board/${board.id}`);

  return {
    data: board,
  };
};

export const CreateBoard = createSafeAction(createboard, handler);
