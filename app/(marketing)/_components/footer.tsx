import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <div className=" fixed bottom-0 px-2   w-full h-16   border-t bg-slate-100 shadow-sm ">
      <div className="flex justify-between md:max-w-screen-lg mx-auto w-full items-center">
        <Logo width={30} height={30}   />
        <div className="absolute right-0 p-2 lg:p-6 md:gap-4 ">
          <Link href="/login">
            <Button variant="ghost" size={"sm"}   >Privacy Policy</Button>
          </Link>
          <Link href="/signup">
            <Button variant="ghost" size= "sm" className= {cn('text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2')} >Terms Of Services</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
