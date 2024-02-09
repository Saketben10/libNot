import { Button } from "@/components/ui/button";
 
import { create } from "../../../../../actions/create-boards";
import { db } from "@/lib/db";
import Board from "./board";

 const Organizationidpage   = async ()=> {

 const boards =await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <form action={create}>
        <label htmlFor="title" className="p-4">
          {" "}
        </label>
        <input
          id="title"
          name="title"
          required
          placeholder="enter your name"
          className="border-black border p-1"
        />
        <Button type="submit">Submit</Button>
      </form>
      <div >
      {boards.map((board)=> (
        <Board key={board.id} title={board.title}  id={board.id} />
      ))}
      </div>
    </div>
  );
}


export default Organizationidpage ;