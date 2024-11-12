import Actualite from "../sections/accueil/Actualite";
import Footer from "../sections/accueil/Footer";
import Hero from "../sections/accueil/Hero";
import Patners from "../sections/accueil/Patners";
import Services from "../sections/accueil/Services";
import Slogan from "../sections/accueil/Slogan";
import Team from "../sections/accueil/Team";


function Accueil() {
  return (
    <>
      <Hero />
      <div className="min-[900px]:-translate-y-24">
        <Services />
        <Slogan />
        <Actualite />
        <Team />
        {/* <Patners /> */}
      </div>
    </>
  );
}

export default Accueil;
