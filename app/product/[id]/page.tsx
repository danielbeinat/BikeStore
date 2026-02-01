"use client";

import { Suspense } from "react";
import Navbar from "@/src/components/Navbar/Navbar";
import Product from "@/src/Pages/Product";
import Footer from "@/src/components/Footer/Footer";
import ChatBox from "@/src/components/ChatBox/ChatBox";
import NewLetter from "@/src/components/NewsLetter/NewLetter";

export const dynamic = "force-dynamic";

export default function ProductDetailPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Cargando...</div>}>
        <Product />
      </Suspense>
      <ChatBox />
      <NewLetter />
      <Footer />
    </>
  );
}
