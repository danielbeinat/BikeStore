"use client";

import { Suspense } from "react";
import Navbar from "@/src/components/Navbar/Navbar";
import Checkout from "@/src/Pages/Checkout";
import Footer from "@/src/components/Footer/Footer";
import ChatBox from "@/src/components/ChatBox/ChatBox";
import NewLetter from "@/src/components/NewsLetter/NewLetter";

export const dynamic = "force-dynamic";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Cargando...</div>}>
        <Checkout />
      </Suspense>
      <ChatBox />
      <NewLetter />
      <Footer />
    </>
  );
}
