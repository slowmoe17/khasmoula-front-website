"use client";

import { ReactNode } from "react";
import EmailSubscription from "./EmailSubscription";

interface AppGlobalProps {
  children: ReactNode;
}

function AppGlobal({ children }: AppGlobalProps) {
  return (
    <>
      <EmailSubscription />
      {children}
    </>
  );
}

export default AppGlobal;
