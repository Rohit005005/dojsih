import Image from "next/image";
import Link from "next/link";
import Header from "./_components/Header";
import { Carousel } from "./_components/Carousel";

export default function Home() {
  return (
    <div >
      <Header/>
      <Carousel/>
      <Link href={"/chatbot"}>
      <button className="ml-[45%] px-5 py-2 bg-green-500 rounded-3xl text-white mb-20 text-3xl">Chatbot !!</button>
      </Link>
    </div>
  );
}
