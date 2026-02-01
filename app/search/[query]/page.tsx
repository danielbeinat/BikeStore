"use client";

import { Suspense } from "react";
import Navbar from "@/src/components/Navbar/Navbar";
import SearchResults from "@/src/Pages/SearchResults";
import Footer from "@/src/components/Footer/Footer";
import ChatBox from "@/src/components/ChatBox/ChatBox";
import NewLetter from "@/src/components/NewsLetter/NewLetter";

export const dynamic = "force-dynamic";

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Cargando...</div>}>
        <SearchResults />
      </Suspense>
      <ChatBox />
      <NewLetter />
      <Footer />
    </>
  );
}
