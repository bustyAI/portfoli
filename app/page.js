import {
  Navbar,
  Main,
  ProjectCard,
  About,
  Techstack,
  Header,
} from "./components";

export default function Home() {
  const descriptions = {
    vinfo:
      "A comprehensive Fleet Managment System, keep track of all your vehicles!",
    edu: "An Education Managment System to stay on top of your education!",
    renta: "Browse and rent your favorite cars!",
    sports: "See if your favorite football team will win!",
  };

  return (
    <main className="flex flex-col min-h-screen overflow-hidden max-w-1440 mx-auto items-center mb-12 px-8 roboto-slab">
      <Navbar />
      <Main />

      <section>
        <div className="text-center mt-40">
          <Header head={"About"} fontSize={4} />
        </div>
        <About />
      </section>


      <section>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col justify-center items-start">
            <Header head={"Projects"} fontSize={4} />
          </div>
          <ProjectCard
            title={"Vinfo"}
            shape={"c-square"}
            type={"Fullstack"}
            description={descriptions.vinfo}
            link={"https://vinfo-brown.vercel.app/"}
          />
          <ProjectCard
            title={"Education Managment System"}
            shape={"c-rhom"}
            type={"Fullstack"}
            description={descriptions.edu}
            link={
              "https://github.com/bustyAI/CST438-Assignment2-03/tree/v1.0secure"
            }
          />
          <ProjectCard
            title={"RentaRide"}
            shape={"c-hex"}
            type={"Frontend"}
            description={descriptions.renta}
            link={"https://renta-ride.vercel.app/"}
          />
          <ProjectCard
            title={"Sports Predictions"}
            shape={"c-non"}
            type={"Machine Learning"}
            description={descriptions.sports}
            link={"https://github.com/bustyAI/football-predictions"}
          />
        </div>
      </section>
    </main>
  );
}
