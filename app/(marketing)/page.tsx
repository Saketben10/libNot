import { Button } from "@/components/ui/button";

import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const headingFont = localFont({ src: "../../public/fonts/font.woff2" });

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Marketingpage = () => {
  return (
    <div className="flex justify-center items-center flex-col max-h-900">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-6 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700   ">
          <Medal className="h-6 w-6 mr-2" />
          No. 1 Task Manager
        </div>
        <h1 className="text-3xl md:text-6xl  text-center">
          Taskify helps team move
        </h1>
        <div className="text-3xl md:text-6xl   bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work forward
        </div>
      </div>
      <div className={cn("tetx-sm md:text-xl  text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto" , textFont.className)}>
        Collaborate, manage product , remind yourself , increase productivity.
        Wokring along mutliple memebers of your team- with our Taskify
      </div>

      <Button
        size="lg"
        className="mt-6 bg-black text-white hover:bg-black/90"
        asChild
      >
        <Link href={"/sign-up"}>Get Taskify For Free</Link>
      </Button>
    </div>
  );
};

export default Marketingpage;
