import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Layout/Header";
import Banner from "@/components/Layout/Banner";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import dayjs from "dayjs";
import Footer from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const initialTime = dayjs().toISOString();
  return (
    <main className="w-screen h-screen flex flex-col">
      {/* <Header />
      <Banner initialTime={initialTime} />
      <LoadingSkeleton /> */}
      <Footer />
    </main>
  );
}
