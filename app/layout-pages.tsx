"use client";

import { Suspense } from "react";
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";
import ChatBox from "@/src/components/ChatBox/ChatBox";
import NewLetter from "@/src/components/NewsLetter/NewLetter";

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#fbbf24] mx-auto mb-4"></div>
      <p className="text-gray-600">Cargando...</p>
    </div>
  </div>
);

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
      <Suspense
        fallback={
          <div className="min-h-[50vh] flex items-center justify-center">
            <div className="animate-pulse text-gray-400">Cargando...</div>
          </div>
        }
      >
        {children}
      </Suspense>
      <ChatBox />
      <NewLetter />
      <Footer />
    </Suspense>
  );
}
