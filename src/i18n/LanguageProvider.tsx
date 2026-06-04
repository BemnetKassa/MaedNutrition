"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { am } from "./locales/am";
import { en, type Messages } from "./locales/en";

export type Locale = "en" | "am";

const STORAGE_KEY = "maed-locale";

const dictionaries: Record<Locale, Messages> = { en, am };

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Messages;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "am" ? "am" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLocaleState(readStoredLocale());
    setHydrated(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "am" ? "am" : "en";
    document.documentElement.dataset.locale = next;
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = locale === "am" ? "am" : "en";
    document.documentElement.dataset.locale = locale;
  }, [locale, hydrated]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      messages: dictionaries[locale],
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
