import Image from "next/image";
import { Navbar, Main } from "./components";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-hidden max-w-1440 mx-auto">
      <Navbar />
      <Main />



    </main>
  );
}
