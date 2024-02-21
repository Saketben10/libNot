import { Button } from "@/components/ui/button";
import { Logo } from "../../../(marketing)/_components/Logo";
import { Plus } from "lucide-react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Mobilesidebar } from "./mobileSidebar";
import { FormPopover } from "@/components/frontend/form-popover";

export const Navbar = () => {
  return (
    <nav className="absolute px-4 top-0 z-50 w-full h-14 border-b shadow-sm flex items-center bg-white">
      <Mobilesidebar/>
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo width={30} height={30} />
        </div>
        <FormPopover align="start"  side = "bottom" sideOffset={18}>
        <Button
          size="sm"
          variant={"primary"}
          className="rounded-lg hidden md:block h-auto py-1.5 px-2 bg-purple-600 hover:bg-purple-600/80 text-white"
        >
          Create
        </Button>
        </FormPopover>
        <FormPopover>
        <Button
          variant={"primary"}
          size="default"
          className="rounded-s-lg block md:hidden bg-purple-600 hover:bg-purple-600/80  text-muted-foreground  "
        >
          <Plus className="h-4 w-4" />
        </Button>
        </FormPopover>
        <div className="absolute right-4  ml-auto flex items-center gap-x-2">
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterSelectOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/select-org"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
            }}
          />
        </div>
      </div>
    </nav>
  );
};
