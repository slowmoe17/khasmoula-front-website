import { Loader2 } from "lucide-react";

interface HandleResponseProps {
  dataLength: number;
  isLoading: boolean;
  children: React.ReactNode;
  loadingComponent?: React.ReactNode;
  data: "single" | "many";
}

function HandleResponse({
  dataLength,
  isLoading,
  children,
  loadingComponent,
  data = "many",
}: HandleResponseProps) {
  if (isLoading) {
    if (data === "single")
      return (
        loadingComponent || (
          <div className="flex items-center justify-center h-full min-h-[300px]">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
          </div>
        )
      );

    if (data === "many")
      return loadingComponent ? (
        <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(310px,1fr))] gap-x-5 md:gap-y-12 sm:gap-y-8 gap-y-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-full min-h-[300px]"
            >
              {loadingComponent}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full min-h-[300px]">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
        </div>
      );
  }

  if (dataLength === 0) {
    return <div>No data found</div>;
  }

  return children;
}

export default HandleResponse;
