import logo from "../assets/logo.png";
import ArrowIcon from "../assets/arrow.svg";
import umbrellaIcon from "../assets/umbrella.svg";
import supportIcon from "../assets/support.svg";
import bookIcon from "../assets/book.svg";
function Accueil() {
  return (
    <div>
      <div>
        <div className="mx-auto mb-2 flex w-full max-w-screen-xl flex-row items-center justify-between py-2">
          <img src={logo} className="h-24" />
          <div className="space-x-4">
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
          <button className="rounded-xl bg-primary p-4 font-semibold text-neutral">
            Realiser un Devis
          </button>
        </div>
        <div className="grid w-full grid-cols-3">
          <div className="h-0.5 bg-secondary"></div>
          <div className="h-0.5 bg-primary"></div>
          <div className="h-0.5 bg-accent"></div>
        </div>
      </div>
      <div className="hero-gradient-bg transform flex h-full min-h-[800px] w-full flex-col items-center justify-center">
        <div className="flex w-full max-w-[1300px] flex-col items-center">
          <div className="flex w-full items-center justify-between ">
            <div className="space-y-2">
              <div>
                <p className="text-lg font-semibold text-neutral">
                  {" "}
                  <span className="text-xl">B</span>ICOR{" "}
                  <span className="text-xl">V</span>IE ET{" "}
                  <span className="text-xl">C</span>APITALISATION
                </p>
              </div>
              <div className="">
                <h1 className="font-LibreBaskerville text-7xl text-neutral">
                  <span className="font-bold">Bicor Vie,</span>{" "}
                  <span className="italic">Ma Vie</span>
                </h1>
                <h2 className="font-LibreBaskerville text-[54px] text-white/70">
                  <span className="font-bold">Proteger</span>{" "}
                  <span className="italic">Vos Proche</span>
                </h2>
                <h3 className="font-LibreBaskerville text-[42px] text-white/70">
                  <span className="font-bold">Protection</span>{" "}
                  <span className="italic">Personelle</span>
                </h3>
              </div>
            </div>
            <div>
              <button className="flex items-center gap-3 rounded-xl bg-black px-3 py-3 text-lg text-neutral">
                <span>Voir Nos Services</span>
                <img src={ArrowIcon} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="flex w-full translate-y-60 transform items-stretch justify-center gap-4 min-h-[430px] rounded-3xl bg-primary p-11 absolute max-w-[1300px] mt-28 shadow">
            <div className="absolute left-0 top-0 w-full h-full container-bg-patern -z-10"/>
            <div className="flex flex-1 flex-col items-center justify-between gap-2 rounded-xl border border-white/10 bg-white p-4">
              <div className="flex flex-col items-center gap-2">
                <div>
                  <img src={umbrellaIcon} alt="Icon" />
                </div>
                <div>
                  <p className="text-center text-3xl font-semibold text-primary">
                    Types de contract offert par Bicor Vie
                  </p>
                </div>
                <div>
                  <p className="text-center text-xl text-primary">
                    De quel type d’assurance vie avez-vous besoin ?
                  </p>
                </div>
              </div>
              <div>
                <button className="flex items-center gap-3 rounded-xl bg-secondary px-12 py-3 text-lg text-neutral">
                  <span>Voir Plus</span>
                  <img
                    className="-rotate-90 transform"
                    src={ArrowIcon}
                    alt="arrow"
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-1 flex-col items-center justify-between rounded-xl border border-white/10 bg-white p-4">
              <div className="flex flex-col items-center gap-2">
                <div>
                  <img src={supportIcon} alt="Icon" />
                </div>
                <div>
                  <p className="text-center text-3xl font-semibold text-primary">
                  Pourquoi souscrire un contrat de Bicor vie
                  </p>
                </div>
                <div>
                  <p className="text-center text-xl text-primary">
                  Planifier l’avenir au moyen d’une assurance vie
                  </p>
                </div>
              </div>
              <div>
                <button className="flex items-center gap-3 rounded-xl bg-secondary px-12 py-3 text-lg text-neutral">
                  <span>Voir Plus</span>
                  <img
                    className="-rotate-90 transform"
                    src={ArrowIcon}
                    alt="arrow"
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white p-2">
              <div>
                <img src={bookIcon} alt="Icon" />
              </div>
              <div>
                <p className="text-center text-3xl font-semibold text-primary">
                Pourquoi souscrire à une assurance éducation pour vos enfpritext-primary?
                </p>
              </div>
              <div>
                <p className="text-center text-xl text-primary">
                De quel type d’assurance vie avez-vous besoin ?
                </p>
              </div>
              <div>
                <button className="flex items-center gap-3 rounded-xl bg-secondary px-12 py-3 text-lg text-neutral">
                  <span>Voir Plus</span>
                  <img
                    className="-rotate-90 transform"
                    src={ArrowIcon}
                    alt="arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
