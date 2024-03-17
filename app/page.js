import Image from "next/image";
import { Navbar, Main, ProjectCard } from "./components";
import { CardCircle } from "./components";



export default function Home() {



  return (
    <main className="flex flex-col min-h-screen overflow-hidden max-w-1440 mx-auto">
      <Navbar />
      <Main />

      <section>
        <div className="flex flex-col lg:flex-row items-center justify-evenly mt-36 lg:space-x-20">
          <ProjectCard title={"Project Name"} shape={'circle'} />
          <ProjectCard title={"Project Name"} shape={'square'} />
          <ProjectCard title={"Project Name"} shape={'triangle'} />
        </div>
      </section>
      <div className="circle w-32 h-32 bg-blue-500 rounded-full relative overflow-hidden"></div>





    </main>
  );
}
