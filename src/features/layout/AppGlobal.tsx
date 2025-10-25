"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import EmailSubscription from "./EmailSubscription";
import Navbar from "./Navbar";
import { DetectCountry } from "../app";
import { FavoritesProvider } from "@/context/FavoritesContext";

const queryClient = new QueryClient();

interface AppGlobalProps {
  children: ReactNode;
}

function AppGlobal({ children }: AppGlobalProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <DetectCountry />
        <Navbar />

        <EmailSubscription />
        {children}
      </FavoritesProvider>
    </QueryClientProvider>
  );
}

export default AppGlobal;
