import { cn } from "@/lib/utils";

interface TitlePageProps {
  title: string;
  className?: string;
}

function TitlePage({ title, className }: TitlePageProps) {
  return (
    <h1 className={cn("max-sm:text-xl text-[28px] font-semibold", className)}>
      {title}
    </h1>
  );
}

export default TitlePage;
