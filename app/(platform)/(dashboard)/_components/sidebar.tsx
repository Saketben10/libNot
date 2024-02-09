"use client";

import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Link from "next/link";
import { Expand, Plus } from "lucide-react";
 
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import NavitemSkeleton, { Navitem, organization } from "./nav-items";

interface Sidebarprops {
  storageKey?: string;
}

export const Sidebar = ({
  storageKey = "t-sidebar-expanded",
}: Sidebarprops) => {
  const [expanded, setexpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {},
  );

  const { organization: activeOragnization, isLoaded: isLoadedorg } =
    useOrganization();
  const { userMemberships, isLoaded: isLoadedList } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  // destructred for clerk ..

  const defaultaccordionvalue = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }
      //{123:true}  => [123]
      // this accoridion value converts the object type expanded value into array to make it compatible with  shadcn accordion

      return acc;
    },
    []
  );

  const onExpanded = (id: string) => {
    setexpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  // toggle whehther it has to expand or not

  if (!isLoadedorg || !isLoadedList || userMemberships.isLoading) {
    return (
      <>
      <div className="flex justify-between mb-2">
        <Skeleton className="h-10 w-[50%]" />
        <Skeleton className="h-10 w-10" />
        </div>
        <div className="space-y-2">
        <NavitemSkeleton/>
        <NavitemSkeleton/>
        <NavitemSkeleton/>
        </div>
      </>
    ); // loading skeleton accoring to values
  } else {
    return (
      <>
     
        <div className="font-meduim text-xs flex items-center mb-2">
          <span className="ml-4">Workspaces !</span>
          <Button
            size="sm"
            variant="ghost"
            type="button"
            className="ml-auto"
            asChild
          >
            <Link href="/select-org">
              <Plus className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <Accordion
          type="multiple"
          defaultValue={defaultaccordionvalue}
          className="space-y-2"
        >
          {userMemberships.data?.map(({ organization }) => (
          <Navitem key={organization.id} isExpanded ={expanded[organization.id]} 
          isActive = {activeOragnization?.id === organization.id}
          organization = {organization as organization} 
          onExpanded={onExpanded}
          />
          ))}
        </Accordion>
 
      </>
    );
  }
};
