import ArrowIcon from "../assets/arrow.svg";
import Tontine from "../assets/tontine-1.jpg";
export default function Services() {
  return (
    <div className="mx-auto mt-[350px] w-full max-w-[1240px] space-y-4">
      <div className="flex gap-4">
        <div className="flex-1 border-t-2 border-secondary shadow">
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
        <div className="flex-1 border-t-2 border-secondary shadow">
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

      <div className="w-full border-t-2 border-secondary shadow">
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
            <p className="text-end font-semibold text-4xl">
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
    </div>
  );
}
