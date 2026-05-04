"use client";

import { Toaster } from "sonner";

export function SiteToaster() {
  return (
    <Toaster
      closeButton
      position="top-right"
      richColors
      toastOptions={{
        duration: 4500,
      }}
    />
  );
}
