import ArrowIcon from "../../assets/arrow.svg";
import umbrellaIcon from "../../assets/umbrella.svg";
import supportIcon from "../../assets/support.svg";
import bookIcon from "../../assets/book.svg";
function Hero() {
  return (
    <section>
      <div className="hero-gradient-bg flex min-h-screen w-full flex-col items-center justify-center">
        <div className="flex w-full max-w-[1300px] flex-col items-center">
          <div className="flex w-full items-center justify-between max-xl:px-4 max-[900px]:flex-col max-[900px]:text-center min-[900px]:-translate-y-20">
            <div className="space-y-2">
              <div>
                <p className="text-lg font-semibold text-neutral max-sm:text-sm">
                  <span className="text-xl">B</span>ICOR{" "}
                  <span className="text-xl">V</span>IE ET{" "}
                  <span className="text-xl">C</span>APITALISATION
                </p>
              </div>
              <div className="">
                <h1 className="font-LibreBaskerville text-7xl text-neutral max-sm:text-6xl">
                  <span className="font-bold">Bicor Vie,</span>{" "}
                  <span className="italic">Ma Vie</span>
                </h1>
                <h2 className="font-LibreBaskerville text-[54px] text-white/70 max-sm:text-5xl max-[436px]:text-4xl">
                  <span className="font-bold">Proteger</span>{" "}
                  <span className="italic">Vos Proche</span>
                </h2>
                <h3 className="font-LibreBaskerville text-[42px] text-white/70 max-sm:text-4xl max-[436px]:text-3xl">
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
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1300px] items-stretch justify-center gap-4 bg-primary p-11 shadow max-xl:p-8 max-[900px]:flex-col min-[900px]:-translate-y-1/2 min-[900px]:rounded-3xl">
        <div className="container-bg-patern absolute left-0 top-0 -z-10 h-full w-full" />
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
              Pourquoi souscrire à une assurance éducation pour vos enfants ?
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
    </section>
  );
}

export default Hero;
