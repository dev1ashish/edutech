"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function GTMPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = pathname + searchParams.toString();
      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      // @ts-ignore
      window.dataLayer.push({
        event: "page_view",
        page: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
