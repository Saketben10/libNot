 
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <div className=" fixed top-0 px-4  flex w-full h-16   border-b bg-white shadow-sm items-center">
      <div className="flex justify-between md:max-w-screen-lg mx-auto w-full items-center"> <Logo width={30} height={30}  weight/> </div>
    </div>
  );
};
