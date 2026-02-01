"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  requireAuth?: boolean;
  redirectTo?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireAuth = false,
  redirectTo = "/login",
}) => {
  const router = useRouter();

  // Placeholder for future authentication implementation
  const isAuthenticated = false;

  useEffect(() => {
    if (requireAuth && !isAuthenticated) {
      router.push(redirectTo);
    }
  }, [requireAuth, isAuthenticated, redirectTo, router]);

  if (requireAuth && !isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};
