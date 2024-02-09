import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Activity, CreditCard, Settings, Layout } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export type organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

interface Navitemprops {
  isExpanded?: boolean;
  isActive?: boolean;
  organization: any;
  onExpanded: (id: string) => void;
}

export const Navitem = ({
  isExpanded,
  isActive,
  organization,
  onExpanded,
}: Navitemprops) => {
  const routes = [
    {
      label: "Boards",
      icon: <Layout className="h-4 w-4 mr-2" />,
      organization: `/organization/${organization.id}`,
    },
    {
      label: "Activity",
      icon: <Activity className="h-4 w-4 mr-2" />,
      organization: `/organization/${organization.id}/activity`,
    },
    {
      label: "settings",
      icon: <Settings className="h-4 w-4 mr-2" />,
      organization: `/organization/${organization.id}/settings`,
    },
    {
      label: "billings",
      icon: <CreditCard className="h-4 w-4 mr-2" />,
      organization: `/organization/${organization.id}/billings`,
    },
  ];

  const router = useRouter();
  const pathname = usePathname();

  const onClick = (href: string) => {
    router.push(href);
  };

  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpanded(organization.id)}
        className={cn(
          "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 translate text-start no-underline hover:no-underline  ",
          !isExpanded && isActive && "bg-sky-500/10 text-sky-700/"
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image
              fill
              src={organization.imageUrl}
              className="rounded-sm object-fill"
              alt="orgImage"
            />
          </div>
          <span className="font-medium text-sm">{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {routes.map((route) => (
          <Button
            key={route.label}
            size="sm"
            variant="ghost"
            onClick={() => onClick(route.organization)}
            className={cn(
              " w-full font-normal justify-start mb-1 pl-10 hover:bg-neutral-500/10 hover:no-underline",
              pathname === route.organization && "bg-sky-500/10  text-sky-700"
            )}
          >
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

 

 

const NavitemSkeleton  = () => {
  return (
    <div className="flex items-center gap-x-2">
    <Skeleton className="h-full w-full absolute" />
    <div className="w-10 h-10 relative shrink-0"></div>

<Skeleton className="h-10 w-full"/>
  </div>
  )
}

export default NavitemSkeleton ;