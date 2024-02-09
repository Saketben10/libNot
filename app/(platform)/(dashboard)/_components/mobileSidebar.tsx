"use client";
import { DoorClosedIcon, Menu } from "lucide-react";  
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Mobilesidebar as mobilesidebarStore } from "../../../../hooks/use-mobile-sidebar";
import { useEffect, useState } from "react";
import { Sheet, SheetClose, SheetContent , SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";
import { CircleDashed } from "lucide-react";

export const Mobilesidebar = () => {
  const onOpen = mobilesidebarStore((state) => state.onOpen);
  const onClose = mobilesidebarStore((state) => state.onClose);
  const isOpen = mobilesidebarStore((state) => state.isOpen);
  const pathname = usePathname();
  const [isMounted, setiSMounted] = useState(false);

  useEffect(() => {
    setiSMounted(true);
  }, []);
  
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>

    <Sheet>
    <SheetTrigger asChild>
       
      <Button onClick={onOpen} className="block md:hidden p-2 ml-1  " variant='ghost' size={'lg'} >
      <CircleDashed/>

      </Button>
      </SheetTrigger>
      <SheetContent>
        <Menu className="h-4 w-4" /> 
        <Sidebar storageKey="mobile-sidebar" />  
        {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
        </SheetContent>
      </Sheet>
    </>



  );
};