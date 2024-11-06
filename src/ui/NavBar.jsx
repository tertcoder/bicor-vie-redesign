import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import ProgressUi from "./ProgressUi";
import { Link, Outlet, useLocation } from "react-router-dom";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [crtPage, setCrtPage] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentRouteName = location.pathname;

  

  const handlerScroll = () => {
    const scrollPosition = window.scrollY;
    if (currentRouteName === "/") {
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  useEffect(() => {
    const currentPage = document.URL.split("/");
    console.log(currentPage)
    document.addEventListener("scroll", handlerScroll);
  }, [currentRouteName]);

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full duration-300 ${isScrolled ? "bg-white text-textGray" : "bg-transparent text-white"}`}
      >
        <div className="mx-auto mb-2 flex w-full max-w-screen-xl flex-row items-center justify-between py-2 max-xl:px-4">
          <img src={logo} className="h-24" alt="Logo" />

          <div className="relative space-x-4 max-lg:hidden">
            <Link to="/" className={`linkStyle active`}>
              Accueil
            </Link>
            <Link to="/a-propos" className={`linkStyle`}>
              A Propos de Nous
            </Link>

            {/* Dropdown Menu for Desktop */}
            <div
              className="relative inline-block"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="linkStyle flex cursor-pointer items-center">
                <span>Nos Produits</span>{" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                      fill={isScrolled ? "#333333" : "white"}
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 overflow-hidden rounded-lg bg-white shadow-lg">
                  <Link
                    to="/protection-credit"
                    className="block px-4 py-2 text-textGray hover:bg-gray-100"
                  >
                    Protection Crédit
                  </Link>
                  <Link
                    to="/pension"
                    className="block px-4 py-2 text-textGray hover:bg-gray-100"
                  >
                    Pension/Retraite
                  </Link>
                  <Link
                    to="/protection-social"
                    className="block px-4 py-2 text-textGray hover:bg-gray-100"
                  >
                    Protection Social
                  </Link>
                  <Link
                    to="/assurance-education"
                    className="block px-4 py-2 text-textGray hover:bg-gray-100"
                  >
                    Assurance Education
                  </Link>
                  <Link
                    to="/tontine"
                    className="block px-4 py-2 text-textGray hover:bg-gray-100"
                  >
                    Tontine
                  </Link>
                </div>
              )}
            </div>

            <Link to="#" className={`linkStyle`}>
              Publications
            </Link>
            <Link to="#" className={`linkStyle`}>
              Nos Agences
            </Link>
            <Link to="#" className={`linkStyle`}>
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Mobile menu toggle button */}
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
            <button
              className="rounded-md bg-primary px-2 py-0.5 text-neutral"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Fermer</span>
            </button>
            <div className="mt-4 flex flex-col space-y-4">
              <Link to="/" className="linkStyle active">
                Accueil
              </Link>
              <Link to="/a-propos" className={`linkStyle`}>
                A Propos de Nous
              </Link>

              {/* Dropdown Menu for Mobile */}
              <div className="relative">
                <button
                  className="linkStyle flex w-full items-center justify-between"
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                >
                  Nos Produits
                  <span>{mobileDropdownOpen ? "-" : "+"}</span>
                </button>
                {mobileDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      to="/protection-credit"
                      className="block text-textGray"
                    >
                      Protection Crédit
                    </Link>
                    <Link to="/pension" className="block text-textGray">
                      Pension/Retraite
                    </Link>
                    <Link
                      to="/protection-social"
                      className="block text-textGray"
                    >
                      Protection Social
                    </Link>
                    <Link
                      to="/assurance-education"
                      className="block text-textGray"
                    >
                      Assurance Education
                    </Link>
                    <Link to="/tontine" className="block text-textGray">
                      Tontine
                    </Link>
                  </div>
                )}
              </div>

              <Link to="#" className={`linkStyle`}>
                Publications
              </Link>
              <Link to="#" className={`linkStyle`}>
                Nos Agences
              </Link>
              <Link to="#" className={`linkStyle`}>
                Contact
              </Link>
            </div>
            <button className="mt-4 w-full rounded-xl bg-primary p-4 font-semibold text-neutral">
              Realiser un Devis
            </button>
          </div>
        </div>

        {isScrolled && <ProgressUi />}
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
