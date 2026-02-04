"use client";

import { ReactNode } from "react";

export const dynamic = "force-static";

export default function ContextLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
