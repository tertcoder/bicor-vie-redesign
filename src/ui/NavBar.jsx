import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import ProgressUi from "./ProgressUi";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  // document.addEventListener("scroll", () => {
  //   const scrollPosition = window.scrollY;
  //   console.log(scrollPosition);
  //   if (scrollPosition > 100) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // });

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full bg-transparent text-textGray duration-300 bg-white`}
      >
        <div className="mx-auto mb-2 flex w-full max-w-screen-xl flex-row items-center justify-between py-2 max-xl:px-4">
          <img src={logo} className="h-24" alt="Logo" />
          <div className="space-x-4 max-lg:hidden">
            <Link to="" className="linkStyle active">
              Accueil
            </Link>
            <Link
              to=""
              className={`linkStyle`}
            >
              A Propos de Nous
            </Link>
            <Link
              to=""
              className={`linkStyle`}
            >
              Nos Produits
            </Link>
            <Link
              to=""
              className={`linkStyle`}
            >
              Publications
            </Link>
            <Link
              to=""
              className={`linkStyle`}
            >
              Nos Agences
            </Link>
            <Link
              to=""
              className={`linkStyle`}
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {/* Button to open the mobile nav */}
            <button
              className="hidden rounded-md bg-secondary p-2 max-lg:block"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="space-y-1">
                <span className="block h-0.5 w-6 rounded-full bg-neutral"></span>
                <span className="block h-0.5 w-5 rounded-full bg-neutral"></span>
                <span className="block h-0.5 w-3 rounded-full bg-neutral"></span>
              </div>
            </button>
            <button className="rounded-xl bg-primary p-4 font-semibold text-neutral max-lg:hidden">
              Realiser un Devis
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          className={`fixed inset-0 z-20 flex h-screen transform justify-end bg-textDark/70 backdrop-blur-sm transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full w-80 bg-neutral p-4">
            {/* Button to close the nav */}
            <button
              className="rounded-md bg-primary px-2 py-0.5 text-neutral"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Fermer</span>
            </button>
            <div className="mt-4 flex flex-col space-y-4">
              <Link to="to/" className="linkStyle active">
                Accueil
              </Link>
              <Link to="" className={`linkStyle`}>
                A Propos de Nous
              </Link>
              <Link to="" className={`linkStyle`}>
                Nos Service
              </Link>
              <Link to="" className={`linkStyle`}>
                Actualite
              </Link>
              <Link to="" className={`linkStyle`}>
                Equipe
              </Link>
              <Link to="" className={`linkStyle`}>
                Contact
              </Link>
            </div>
            <button className="mt-4 w-full rounded-xl bg-primary p-4 font-semibold text-neutral">
              Realiser un Devis
            </button>
          </div>
        </div>

        <ProgressUi />
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
