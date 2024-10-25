import ArrowIcon from "../../assets/arrow.svg";
import Tontine from "../../assets/tontine-1.jpg";
export default function Services() {
  return (
    <section className="mx-auto mt-0 w-full max-w-[1240px] space-y-4 max-xl:px-4 max-[900px]:mt-28">
      <div className="flex w-full items-center gap-4 mb-8">
        <svg
          width="29"
          height="30"
          viewBox="0 0 29 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="14.3701"
            y="0.859619"
            width="20"
            height="20"
            transform="rotate(45.9311 14.3701 0.859619)"
            fill="#014D30"
          />
        </svg>
        <p className="text-[32px] font-semibold text-primary">NOS SERVICES</p>
      </div>
      <div className="flex gap-4 max-[900px]:flex-col">
        <div className="flex-1 rounded-b-lg border-t-2 border-secondary shadow">
          <div className="p-6">
            <p className="text-3xl font-semibold text-textGray">
              Enfant assuré = Avenir assuré
            </p>
            <p className="mt-3 text-xl font-light text-textGray">
              Offrez à vos enfants une éducation de qualité et planifiez dès
              maintenant leurs dépenses futures.
            </p>
          </div>
          <div className="bg-service-1 flex h-[375px] items-end justify-end rounded-b-lg p-4">
            <button className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-3 text-lg font-semibold text-neutral">
              <span>Préparer l'Avenir</span>
              <img
                className="-rotate-90 transform"
                src={ArrowIcon}
                alt="arrow"
              />
            </button>
          </div>
        </div>
        <div className="flex-1 rounded-b-lg border-t-2 border-secondary shadow">
          <div className="p-6">
            <p className="text-3xl font-semibold text-textGray">
              Épargne Retraite
            </p>
            <p className="mt-3 text-xl font-light text-textGray">
              Quittez votre activité en toute sérénité avec un revenu régulier
              après la retraite
            </p>
          </div>
          <div className="bg-service-2 flex h-[375px] items-end justify-end overflow-hidden rounded-b-lg p-4">
            <button className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-3 text-lg font-semibold text-neutral">
              <span>Voir les Avantages</span>
              <img
                className="-rotate-90 transform"
                src={ArrowIcon}
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full rounded-b-lg border-t-2 border-secondary shadow">
        <div className="max-w-[487px] p-6">
          <p className="text-3xl font-semibold text-textGray">
            Assurance Super Tontine
          </p>
          <p className="mt-3 text-xl font-light text-textGray">
            Une assurance vie qui valorise vos cotisations régulières pour plus
            de sécurité.
          </p>
        </div>
        <div className="bg-service-3 flex h-[375px] flex-col items-end justify-between overflow-hidden rounded-b-lg p-4">
          <div className="w-full px-6 pt-8 text-2xl italic text-white">
            <p className="text-end text-4xl font-semibold">
              Votre assurance, notre priorité
            </p>
          </div>
          <div>
            <button className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-3 text-lg font-semibold text-neutral">
              <span>Voir les Avantages</span>
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
