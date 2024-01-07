import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <div className="fixed top-0 px-2 flex w-full h-16 border-b bg-white shadow-sm items-center">
      <div className="flex justify-between md:max-w-screen-lg mx-auto w-full items-center">
        <Logo width={30} height={30} />
        <div className="flex space-x-4">
          <Link href="/sign-in">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button
             variant ="ghost"
              size="sm"
              className={cn(
                'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 hover:bg-purple-600/75 rounded-md'
              )}
            >
              Sign-up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
