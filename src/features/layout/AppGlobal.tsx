"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import EmailSubscription from "./EmailSubscription";
import Navbar from "./Navbar";
import { DetectCountry } from "../app";

const queryClient = new QueryClient();

interface AppGlobalProps {
  children: ReactNode;
}

function AppGlobal({ children }: AppGlobalProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DetectCountry />
      <Navbar />

      <EmailSubscription />
      {children}
    </QueryClientProvider>
  );
}

export default AppGlobal;
