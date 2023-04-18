"use client";
import Blog from "@/components/home/blog";
import CustomerOpinion from "@/components/home/customerOpinion";
import Helping from "@/components/home/helping";
import NewsLetter from "@/components/home/newsLetter";
import Offersection from "@/components/home/offersection";
import Footer from "@/components/layout/footer";
import Gallery from "@/components/home/gallery";
import Header from "@/components/layout/header/header";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Helping />
      <Offersection />
      <Gallery />
      <CustomerOpinion />
      <NewsLetter />
      <Blog />
      <Footer />
    </>
  );
}
