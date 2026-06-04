"use client";

import { usePathname } from "next/navigation";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { Footer } from "./footer";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const hideFooter = pathname.startsWith("/assessment");

  return (
    <LanguageProvider>
      {children}
      {!hideFooter && <Footer />}
    </LanguageProvider>
  );
}
