import Image from "next/image";
import { Navbar, Main, ProjectCard, About } from "./components";



export default function Home() {

  const descriptions = {
    vinfo: "A comprehensive Fleet Managment System, keep track of all your vehicles!",
    edu: "An Education Managment System to stay on top of your education!",
    renta: "Browse and rent your favorite cars!",
    sports: "See if your favorite football team will win!"
  }


  return (
    <main className="flex flex-col min-h-screen overflow-hidden max-w-1440 mx-auto">
      <Navbar />
      <Main />
      <section>
        <About />
      </section>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-36 mx-auto justify-items-center lg:justify-items-stretch">
          <ProjectCard title={"Vinfo"} shape={'circle'} type={"Fullstack"} description={descriptions.vinfo} link={"https://renta-ride.vercel.app/"} />
          <ProjectCard title={"Education Managment System"} shape={'square'} type={"Fullstack"} description={descriptions.edu} link={"https://renta-ride.vercel.app/"} />
          <ProjectCard title={"RentaRide"} shape={'triangle'} type={"Frontend"} description={descriptions.renta} link={"https://renta-ride.vercel.app/"} />
          <ProjectCard title={"Sports Predictions"} shape={'pentagon'} type={"Machine Learning"} description={descriptions.sports} link={"https://renta-ride.vercel.app/"} />
        </div>
      </section>




    </main>
  );
}
