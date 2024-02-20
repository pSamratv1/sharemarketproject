import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Layout/Header";
import Banner from "@/components/Layout/Banner";
import LoadingSkeleton from "@/components/mainComponents/LoadingSkeleton";
import dayjs from "dayjs";
import Footer from "@/components/Layout/Footer";
import CommonLayout from "@/components/mainComponents/CommonLayout";
import { Provider } from "react-redux";
import store from "../redux/store";
import MainSection from "@/components/mainComponents/innerComp/MainSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const initialTime = dayjs().toISOString();
  return (
    <Provider store={store}>
      <main className="w-full h-screen flex flex-col">
        <CommonLayout>
          <MainSection />
        </CommonLayout>
      </main>
    </Provider>
  );
}
