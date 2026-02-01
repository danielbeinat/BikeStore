"use client";

import { Suspense } from "react";
import Navbar from "@/src/components/Navbar/Navbar";
import Cart from "@/src/Pages/Cart";
import Footer from "@/src/components/Footer/Footer";
import ChatBox from "@/src/components/ChatBox/ChatBox";
import NewLetter from "@/src/components/NewsLetter/NewLetter";

export const dynamic = "force-dynamic";

export default function CartPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Cargando...</div>}>
        <Cart />
      </Suspense>
      <ChatBox />
      <NewLetter />
      <Footer />
    </>
  );
}
