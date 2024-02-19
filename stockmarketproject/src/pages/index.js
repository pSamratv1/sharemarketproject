import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Layout/Header";
import Banner from "@/components/Layout/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <Header />
      <Banner />
    </main>
  );
}
