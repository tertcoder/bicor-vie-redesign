import { useState } from "react";
import logo from "../assets/logo.png";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative text-textGray">
      <div className="mx-auto mb-2 flex w-full max-w-screen-xl flex-row items-center justify-between py-2 max-xl:px-4">
        <img src={logo} className="h-24" alt="Logo" />
        <div className="space-x-4 max-lg:hidden">
          <a href="#" className="linkStyle active">
            Accueil
          </a>
          <a href="#" className="linkStyle">
            A Propos de Nous
          </a>
          <a href="#" className="linkStyle">
            Nos Produits
          </a>
          <a href="#" className="linkStyle">
            Publications
          </a>
          <a href="#" className="linkStyle">
            Nos Agences
          </a>
          <a href="#" className="linkStyle">
            Contact
          </a>
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
            <a href="#" className="linkStyle active">
              Accueil
            </a>
            <a href="#" className="linkStyle">
              A Propos de Nous
            </a>
            <a href="#" className="linkStyle">
              Nos Produits
            </a>
            <a href="#" className="linkStyle">
              Publications
            </a>
            <a href="#" className="linkStyle">
              Nos Agences
            </a>
            <a href="#" className="linkStyle">
              Contact
            </a>
          </div>
          <button className="mt-4 w-full rounded-xl bg-primary p-4 font-semibold text-neutral">
            Realiser un Devis
          </button>
        </div>
      </div>

      <div className="grid w-full grid-cols-3">
        <div className="h-0.5 bg-secondary"></div>
        <div className="h-0.5 bg-primary"></div>
        <div className="h-0.5 bg-accent"></div>
      </div>
    </nav>
  );
}

export default NavBar;
