"use server"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

 const  deleteboard  = async (id : string)=> {
    await db.board.delete({
        where: {
            id 
        }
    })
    revalidatePath('/organization/org_2ahsUiasJCdikOnhgcfDIsgK9it')
}
export default deleteboard;