import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("px-4 md:px-10 lg:px-14 xl:px-17.5", className)}>
      {children}
    </div>
  );
}

export default Container;
