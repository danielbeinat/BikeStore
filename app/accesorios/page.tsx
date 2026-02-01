"use client";

import { Suspense } from "react";
import Navbar from "@/src/components/Navbar/Navbar";
import Category from "@/src/Pages/Category";
import Footer from "@/src/components/Footer/Footer";
import ChatBox from "@/src/components/ChatBox/ChatBox";
import NewLetter from "@/src/components/NewsLetter/NewLetter";

export const dynamic = "force-dynamic";

export default function AccesoriosPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Cargando...</div>}>
        <Category Category="Accesorios" />
      </Suspense>
      <ChatBox />
      <NewLetter />
      <Footer />
    </>
  );
}
