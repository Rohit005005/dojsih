import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Link href={"/chatbot"}>
      <button className=" px-5 py-2 bg-green-500 rounded-3xl text-white">Shawty is here !!</button>
      </Link>
    </div>
  );
}
