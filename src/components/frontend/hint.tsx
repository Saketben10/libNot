import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
interface Tooltiprops {
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  description?: string;
  sideOffset?: number;
}
export const Hint = ({
  children,
  description,
  side = "bottom",
  sideOffset = 0,
}: Tooltiprops) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
              <TooltipTrigger>{children}</TooltipTrigger>
              <TooltipContent sideOffset={sideOffset} side={side} className="text-xs">
                  {description}
              </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
