/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import NavBar from "../components/NavBar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

// <main className="flex min-h-screen flex-col items-center justify-between p-24">
// </main>

export default function Home() {
  return (
    <>
      <NavBar />
      <MainContent />
      <Footer />
    </>
  );
}
