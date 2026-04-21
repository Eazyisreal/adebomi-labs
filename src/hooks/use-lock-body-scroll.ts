import { useEffect } from "react";

export function useLockBodyScroll(lock: boolean) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (lock) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [lock]);
}
