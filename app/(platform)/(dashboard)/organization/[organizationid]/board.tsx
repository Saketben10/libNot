import { Button } from "@/components/ui/button";
import deleteboard from "../../../../../actions/delete-board";

interface boardprops {
  title: string;
  id : string
}


const Board = ({ title , id }: boardprops) => {
 const deleteBoardwithid= deleteboard.bind(null , id)

  return (
    <form action={deleteBoardwithid} className="space-y-2 p-1 flex">
      <p> Board title : {title}</p>
      <Button
        variant={"destructive"}
        size={"sm"}
        type="submit"
        className="bg-red"
      >
        Delete
      </Button>
    </form>
  );
};

export default Board;
