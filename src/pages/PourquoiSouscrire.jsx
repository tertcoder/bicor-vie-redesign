import Footer from "../sections/accueil/Footer";

export default function PourquoiSouscrire() {
  const advantages = [
    {
      id: 1,
      title: "Protection financière",
      description:
        "Les contrats d'assurance (comme l'assurance vie et l'assurance crédit) offrent une sécurité financière à vos proches en cas de décès ou d'incapacité.",
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12l2.5 2.5L16 9"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Épargne et investissement",
      description:
        "Des options comme l'assurance éducation et la tontine permettent d'épargner et de préparer l'avenir, que ce soit pour les études des enfants ou pour des projets personnels.",
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14M5 12l5-5M5 12l5 5"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Flexibilité",
      description:
        "Bicor Vie propose différents types de contrats qui s'adaptent à des besoins variés, vous permettant de choisir celui qui correspond le mieux à votre situation.",
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12h18M3 12l6-6m-6 6l6 6"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Assurance maladie",
      description:
        "Cela vous protège contre les frais médicaux imprévus, réduisant le stress financier lié aux soins de santé.",
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v8m-4-4h8"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Accompagnement et conseils",
      description:
        "Bicor Vie offre souvent des conseils personnalisés pour vous aider à choisir la meilleure couverture, en tenant compte de vos besoins et de votre budget.",
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12l2.5 2.5L16 9"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Solidarité",
      description:
        "Avec des produits comme la tontine, vous participez à un système de mutualisation qui peut bénéficier à tous les participants.",
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v18m9-9H3"
          />
        </svg>
      ),
    },
    {
      id: 7,
      title: "Sérénité",
      description:
        "Savoir que vous êtes protégé contre les imprévus de la vie vous apporte une tranquillité d'esprit.",
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m-3-3h6"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="">
        {/* Hero Section */}
        <div className="bg-pourquoi flex min-h-[800px] items-center justify-center bg-cover bg-center text-neutral">
          <div className="rounded-md bg-primary bg-opacity-70 p-8">
            <h1 className="mb-4 text-4xl font-bold">
              Pourquoi souscrire un contrat de Bicor Vie?
            </h1>
            <p className="text-lg">
              Souscrire un contrat chez Bicor Vie peut présenter plusieurs
              avantages.
            </p>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="mx-auto grid max-w-[1300px] gap-6 p-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className="rounded-lg bg-white p-6 shadow-md"
            >
              <div className="mb-4 text-primary">{advantage.svgIcon}</div>
              <h2 className="mb-2 mt-4 text-2xl font-bold text-primary">
                {advantage.title}
              </h2>
              <p className="text-textGray">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
