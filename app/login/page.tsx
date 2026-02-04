"use client";

import { Suspense } from "react";
import Navbar from "@/src/components/Navbar/Navbar";
import Login from "@/src/Pages/Account/Login";
import Footer from "@/src/components/Footer/Footer";
import ChatBox from "@/src/components/ChatBox/ChatBox";
import NewLetter from "@/src/components/NewsLetter/NewLetter";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Cargando...</div>}>
        <Login />
      </Suspense>
      <ChatBox />
      <NewLetter />
      <Footer />
    </>
  );
}
