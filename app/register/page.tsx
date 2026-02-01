"use client";

import { Suspense } from "react";
import Navbar from "@/src/components/Navbar/Navbar";
import Register from "@/src/Pages/Account/Register";
import Footer from "@/src/components/Footer/Footer";
import ChatBox from "@/src/components/ChatBox/ChatBox";
import NewLetter from "@/src/components/NewsLetter/NewLetter";

export const dynamic = "force-dynamic";

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Cargando...</div>}>
        <Register />
      </Suspense>
      <ChatBox />
      <NewLetter />
      <Footer />
    </>
  );
}
