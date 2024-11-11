import ArrowIcon from "../../assets/arrow.svg";
import CreditPhoto from "../../assets/credit.jpg";
import PensionPhoto from "../../assets/retraite.png";
import TontinePhoto from "../../assets/tontine-1.jpg";
import SocialProtectionPhoto from "../../assets/social-protection.png";
import EducationPhoto from "../../assets/education.jpg";
import { Link } from "react-router-dom";
export default function Services() {
  const servicesData = [
    {
      url: "/souscrire",
      img: CreditPhoto,
      name: "Assurance Crédit",
      description:
        "Protégez vos crédits et emprunts avec une couverture adaptée en cas de difficulté de remboursement.",
    },
    {
      url: "/souscrire",
      img: PensionPhoto,
      name: "Assurance Pension",
      description:
        "Quittez votre activité en toute sérénité avec un revenu régulier après la retraite.",
    },
    {
      url: "/souscrire",
      img: EducationPhoto,
      name: "Assurance Éducation",
      description:
        "Offrez à vos enfants une éducation de qualité en planifiant dès aujourd'hui les dépenses futures.",
    },
    {
      url: "/souscrire",
      img: SocialProtectionPhoto,
      name: "Assurance Protection Sociale",
      description:
        "Bénéficiez d'une couverture pour vous et votre famille face aux imprévus et aux risques de la vie.",
    },
    {
      url: "/souscrire",
      img: TontinePhoto,
      name: "Assurance Super Tontine",
      description:
        "Une assurance vie qui valorise vos cotisations régulières pour plus de sécurité et d'épargne.",
    },
  ];

  return (
    <section
      className="mx-auto mt-0 w-full max-w-[1240px] space-y-4 max-xl:px-4 max-[900px]:mt-28"
      id="services"
    >
      <div className="mb-8 flex w-full items-center gap-4">
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
      <div className="grid grid-cols-2 flex-col gap-8 max-[900px]:flex-col">
        {servicesData.map((service, id) => (
          <div
            className={`flex-1 rounded-b-lg border-t-2 border-secondary shadow ${id === 0 ? "col-span-2" : "col-span-1"}`}
            key={id}
          >
            <div className="p-6">
              <p className="text-3xl font-semibold text-textGray">
                {service.name}
              </p>
              <p className="mt-3 text-xl font-light text-textGray">
                {service.description}
              </p>
            </div>
            <div className="relative flex h-[375px] items-end justify-end overflow-hidden rounded-b-lg">
              <img
                src={service.img}
                alt={service.name}
                className="absolute bottom-0 w-full transform"
              />
              <div className="p-4">
                <Link to="/devit">
                  <button className="relative z-50 flex items-center gap-3 rounded-xl bg-secondary px-4 py-3 text-lg font-semibold text-neutral">
                    <span>Préparer l'Avenir</span>
                    <img
                      className="-rotate-90 transform"
                      src={ArrowIcon}
                      alt="arrow"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
