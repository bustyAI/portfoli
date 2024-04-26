import Image from "next/image";
import { Navbar, Main, ProjectCard, About, HrLine } from "./components";



export default function Home() {

  const descriptions = {
    vinfo: "A comprehensive Fleet Managment System, keep track of all your vehicles!",
    edu: "An Education Managment System to stay on top of your education!",
    renta: "Browse and rent your favorite cars!",
    sports: "See if your favorite football team will win!"
  }


  return (
    <main className="flex flex-col min-h-screen overflow-hidden max-w-1440 mx-auto mb-12 px-8">
      <Navbar />
      <Main />
      <HrLine />

      <section>
        <About />
      </section>
      <HrLine />

      <div className="text-center text-3xl font-semibold mt-40" >
        <p className='text-5xl font-bold mb-20 inline-block relative overflow-hidden'
          style={{
            background: 'linear-gradient(to right, #EC4899 0%, #8B5CF6 100%)',
            backgroundSize: '90% 40%',  // Increases the gradient's area, making the transition smaller
            backgroundRepeat: 'no-repeat',
            paddingRight: '1.6rem',
            backgroundPosition: 'right bottom'
          }}>
          Projects
        </p>
      </div>

      <section>
        <div className="flex flex-col gap-10 justify-center items-center">
          <ProjectCard title={"Vinfo"} shape={'circle'} type={"Fullstack"} description={descriptions.vinfo} link={"https://renta-ride.vercel.app/"} />
          <ProjectCard title={"Education Managment System"} shape={'square'} type={"Fullstack"} description={descriptions.edu} link={"https://renta-ride.vercel.app/"} />
          <ProjectCard title={"RentaRide"} shape={'triangle'} type={"Frontend"} description={descriptions.renta} link={"https://renta-ride.vercel.app/"} />
          <ProjectCard title={"Sports Predictions"} shape={'pentagon'} type={"Machine Learning"} description={descriptions.sports} link={"https://renta-ride.vercel.app/"} />
        </div>
      </section>




    </main>
  );
}
