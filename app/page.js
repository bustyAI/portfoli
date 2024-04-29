import { Navbar, Main, ProjectCard, About } from "./components";



export default function Home() {

  const descriptions = {
    vinfo: "A comprehensive Fleet Managment System, keep track of all your vehicles!",
    edu: "An Education Managment System to stay on top of your education!",
    renta: "Browse and rent your favorite cars!",
    sports: "See if your favorite football team will win!"
  }


  return (
    <main className="flex flex-col min-h-screen overflow-hidden max-w-1440 mx-auto items-center mb-12 px-8">
      <Navbar />
      <Main />


      <section>
        <About />
      </section>




      <section>
        <div className="flex flex-col space-y-6">

          <div className='flex flex-col justify-center items-start'>
            <p className='text-3xl font-bold mb-8 inline-block relative overflow-hidden'
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

          <ProjectCard title={"Vinfo"} shape={'c-square'} type={"Fullstack"} description={descriptions.vinfo} link={"https://vinfo-brown.vercel.app/"} />
          <ProjectCard title={"Education Managment System"} shape={'c-rhom'} type={"Fullstack"} description={descriptions.edu} link={"https://github.com/bustyAI/CST438-Assignment2-03/tree/v1.0secure"} />
          <ProjectCard title={"RentaRide"} shape={'c-hex'} type={"Frontend"} description={descriptions.renta} link={"https://renta-ride.vercel.app/"} />
          <ProjectCard title={"Sports Predictions"} shape={'c-non'} type={"Machine Learning"} description={descriptions.sports} link={"https://github.com/bustyAI/football-predictions"} />

        </div>
      </section>




    </main>
  );
}
