import { Loader2 } from "lucide-react";

function LoadingFullScreen() {
  return (
    <div className="flex items-center justify-center text-primary w-screen h-screen fixed top-0 left-0 right-0 bottom-0 z-50 bg-white/50">
      <Loader2 className="w-10 h-10 animate-spin text-primary" />
    </div>
  );
}

export default LoadingFullScreen;
