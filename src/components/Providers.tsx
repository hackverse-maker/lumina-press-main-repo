"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import { AppStateProvider } from "@/context/AppStateContext";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider>
      <AppStateProvider>
        <QueryClientProvider client={queryClient}>
          <>{children}</>
        </QueryClientProvider>
      </AppStateProvider>
    </ThemeProvider>
  );
}
