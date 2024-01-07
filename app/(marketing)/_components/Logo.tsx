
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = ({width=15 , height =15 }) => {
  return (
    <Link href={'/'}>
      <div className="  flex items-center gap-x-2 hover:opacity-75 transition">
        <div className=" shrink-0  bg-white rounded-full p-1  lg:mr-0 lg:shrink">
          <Image  src= "/logo.svg" alt={'productlogo'}  height={height} width={width}  />
        </div>
        <div className={cn(font.className , "hidden lg:block")}>
          <p className={cn("text-lg    font-bold")}>Libnotes</p>
         
        </div>

        
      </div>
    </Link>
  );
};