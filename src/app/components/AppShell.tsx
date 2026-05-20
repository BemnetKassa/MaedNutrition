"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./footer";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const hideFooter = pathname.startsWith("/assessment");

  return (
    <>
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
