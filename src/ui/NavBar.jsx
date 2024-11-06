import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import ProgressUi from "./ProgressUi";
import { Link, Outlet, useLocation } from "react-router-dom";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handlerScroll = () => {
      const scrollPosition = window.scrollY;
      if (location.pathname === "/") {
        setIsScrolled(scrollPosition > 10);
      }
    };

    document.addEventListener("scroll", handlerScroll);
    return () => document.removeEventListener("scroll", handlerScroll);
  }, [location.pathname]);

  // Determine if we're on the home page
  const isHomePage = location.pathname === "/";

  // Define styles based on page and scroll position
  const navStyle = {
    position: isHomePage ? "fixed" : "sticky",
    backgroundColor: !isHomePage || isScrolled ? "white" : "transparent",
  };

  // Update link color based on page, scroll position, and active state
  const getLinkStyle = (path, isDropdownItem = false) => {
    const isActive = location.pathname === path;

    if (isDropdownItem) {
      return `block px-4 py-2 text-textGray hover:text-primary ${isActive ? "text-primary font-semibold" : ""}`;
    }

    const baseStyle =
      !isHomePage || isScrolled
        ? "text-textGray hover:text-primary"
        : "text-white hover:text-secondary";
    return `${baseStyle} font-medium ${isActive ? "text-primary font-semibold" : ""}`;
  };

  return (
    <>
      <nav
        className={`left-0 top-0 z-50 w-full duration-300 ${navStyle.position}`}
        style={{ backgroundColor: navStyle.backgroundColor }}
      >
        <div className="mx-auto mb-2 flex w-full max-w-screen-xl flex-row items-center justify-between py-2 max-xl:px-4">
          <img src={logo} className="h-24" alt="Logo" />

          <div className="relative space-x-4 max-lg:hidden">
            <Link to="/" className={getLinkStyle("/")}>
              Accueil
            </Link>
            <Link to="/a-propos" className={getLinkStyle("/a-propos")}>
              A Propos de Nous
            </Link>

            {/* Dropdown Menu for Desktop */}
            <div
              className="relative inline-block"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div
                className={`flex cursor-pointer items-center ${getLinkStyle("/products")}`}
              >
                <span>Nos Produits</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <path
                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                    fill={!isHomePage || isScrolled ? "#333333" : "white"}
                  />
                </svg>
              </div>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 overflow-hidden rounded-lg bg-white shadow-lg">
                  <Link
                    to="/protection-credit"
                    className={getLinkStyle("/protection-credit", true)}
                  >
                    Protection Crédit
                  </Link>
                  <Link
                    to="/pension"
                    className={getLinkStyle("/pension", true)}
                  >
                    Pension/Retraite
                  </Link>
                  <Link
                    to="/protection-social"
                    className={getLinkStyle("/protection-social", true)}
                  >
                    Protection Social
                  </Link>
                  <Link
                    to="/assurance-education"
                    className={getLinkStyle("/assurance-education", true)}
                  >
                    Assurance Education
                  </Link>
                  <Link
                    to="/tontine"
                    className={getLinkStyle("/tontine", true)}
                  >
                    Tontine
                  </Link>
                </div>
              )}
            </div>

            <Link to="/publications" className={getLinkStyle("/publications")}>
              Publications
            </Link>
            <Link to="/agences" className={getLinkStyle("/agences")}>
              Nos Agences
            </Link>
            <Link to="/contact" className={getLinkStyle("/contact")}>
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
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
              <Link to="/" className={getLinkStyle("/")}>
                Accueil
              </Link>
              <Link to="/a-propos" className={getLinkStyle("/a-propos")}>
                A Propos de Nous
              </Link>

              {/* Dropdown Menu for Mobile */}
              <div className="relative">
                <button
                  className={`flex w-full items-center justify-between ${getLinkStyle("/products")}`}
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                >
                  Nos Produits
                  <span>{mobileDropdownOpen ? "-" : "+"}</span>
                </button>
                {mobileDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      to="/protection-credit"
                      className={getLinkStyle("/protection-credit", true)}
                    >
                      Protection Crédit
                    </Link>
                    <Link
                      to="/pension"
                      className={getLinkStyle("/pension", true)}
                    >
                      Pension/Retraite
                    </Link>
                    <Link
                      to="/protection-social"
                      className={getLinkStyle("/protection-social", true)}
                    >
                      Protection Social
                    </Link>
                    <Link
                      to="/assurance-education"
                      className={getLinkStyle("/assurance-education", true)}
                    >
                      Assurance Education
                    </Link>
                    <Link
                      to="/tontine"
                      className={getLinkStyle("/tontine", true)}
                    >
                      Tontine
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/publications"
                className={getLinkStyle("/publications")}
              >
                Publications
              </Link>
              <Link to="/agences" className={getLinkStyle("/agences")}>
                Nos Agences
              </Link>
              <Link to="/contact" className={getLinkStyle("/contact")}>
                Contact
              </Link>
            </div>
            <button className="mt-4 w-full rounded-xl bg-primary p-4 font-semibold text-neutral">
              Realiser un Devis
            </button>
          </div>
        </div>

        {(!isHomePage || isScrolled) && <ProgressUi />}
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
