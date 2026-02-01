"use client";

import { ReactNode } from "react";

export const dynamic = "force-dynamic";

export default function ContextLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
