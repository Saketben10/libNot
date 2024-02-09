"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import {  z} from 'zod';

export async function create(formData: FormData) {


  const createBoard = z.object({
    title :z.string()
  })

 const {title} = createBoard.parse({
    title : formData.get('title')
  })

 
 await db.board.create({
  data : {
    title
  }
 })


 revalidatePath('/organization/org_2ahsUiasJCdikOnhgcfDIsgK9it')
 
}
