import { Suspense } from "react";
import Navbar from "@/src/components/Navbar/Navbar";
import News from "@/src/Pages/News";
import Footer from "@/src/components/Footer/Footer";
import ChatBox from "@/src/components/ChatBox/ChatBox";
import NewLetter from "@/src/components/NewsLetter/NewLetter";

export const revalidate = 3600; // ISR: revalidate every hour

export default function NovedadesPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Cargando...</div>}>
        <News />
      </Suspense>
      <ChatBox />
      <NewLetter />
      <Footer />
    </>
  );
}
