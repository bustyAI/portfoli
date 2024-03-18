import Image from "next/image";
import { Navbar, Main, ProjectCard } from "./components";



export default function Home() {



  return (
    <main className="flex flex-col min-h-screen overflow-hidden max-w-1440 mx-auto">
      <Navbar />
      <Main />

      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-36 mx-auto justify-items-center lg:justify-items-stretch">
          <ProjectCard title={"Project Name"} shape={'circle'} />
          <ProjectCard title={"Project Name"} shape={'square'} />
          <ProjectCard title={"Project Name"} shape={'triangle'} />
          <ProjectCard title={"Project Name"} shape={'pentagon'} />
        </div>
      </section>
      <div className="circle w-32 h-32 bg-blue-500 rounded-full relative"></div>





    </main>
  );
}
