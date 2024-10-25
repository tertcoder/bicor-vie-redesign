import Actualite from "../sections/accueil/Actualite";
import Hero from "../sections/accueil/Hero";
import Services from "../sections/accueil/Services";
import Slogan from "../sections/accueil/Slogan";
import NavBar from "../ui/NavBar";
function Accueil() {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="min-[900px]:-translate-y-24">
        <Services />
        <Slogan />
        <Actualite/>
      </div>
    </>
  );
}

export default Accueil;
