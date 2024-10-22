import LifeInsurancePhoto from "../assets/life-insurance13.jpg";
import ArrowIcon from "../assets/arrow.svg";

export default function Slogan() {
  return (
    <>
      <div className="mx-auto mt-12 flex w-full max-w-[1240px] items-center justify-between gap-12">
        <div className="flex-1 space-y-4">
          <h1 className="text-[48px] font-bold text-primary">
            Bicor Vie, ma Vie
          </h1>
          <p className="text-xl text-textGray">
            Fort de plus de 20 ans d’expérience, nous offrons les meilleurs
            conseils adaptés à vos besoins. Nous accompagnons nos clients à tous
            les niveaux, des directions aux employés, avec des solutions sur
            mesure pour optimiser vos relations d’affaires.
          </p>
          <button className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-3 text-lg font-semibold text-neutral">
            <span>Préparer l'Avenir</span>
            <img className="-rotate-90 transform" src={ArrowIcon} alt="arrow" />
          </button>
        </div>
        <div className="h-[413px] w-[623px]">
          <img src={LifeInsurancePhoto} alt="photo" />
        </div>
      </div>
    </>
  );
}
