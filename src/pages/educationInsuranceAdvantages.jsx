import React from "react";
import Footer from "../sections/accueil/Footer";

const AdvantagesList = () => {
  const educationInsuranceAdvantages = [
    {
      id: 1,
      title: "Épargne dédiée",
      description:
        "Ce type de contrat permet de constituer une épargne spécifiquement destinée à financer l'éducation de vos enfants, que ce soit pour les frais de scolarité, les manuels ou les études supérieures.",
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
      title: "Sécurisation de l'avenir",
      description:
        "En anticipant les coûts liés à l'éducation, vous assurez à vos enfants les moyens d'accéder à des opportunités d'études, réduisant le stress financier à l'approche de ces dépenses.",
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
      title: "Rendement potentiel",
      description:
        "Les contrats d'assurance éducation incluent souvent des options de capitalisation, permettant à votre épargne de croître avec le temps, augmentant ainsi le montant disponible pour les études de vos enfants.",
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
      id: 4,
      title: "Discipline d'épargne",
      description:
        "Souscrire à ce type d'assurance vous incite à épargner régulièrement, ce qui peut être bénéfique pour votre budget familial sur le long terme.",
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
    {
      id: 5,
      title: "Protection en cas d'imprévu",
      description:
        "Certains contrats incluent des garanties en cas de décès ou d'invalidité, assurant que l'épargne continue d'être alimentée même en cas de coup dur.",
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
      id: 6,
      title: "Avantages fiscaux",
      description:
        "Dans certains pays, les versements effectués dans le cadre d'une assurance éducation peuvent bénéficier d'avantages fiscaux, ce qui rend l'épargne encore plus attractive.",
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
  ];

  return (
    <>
      <div className="">
        {/* Hero Section */}
        <div className="bg-pourquoi flex min-h-[800px] items-center justify-center bg-cover bg-center text-neutral">
          <div className="rounded-md bg-primary bg-opacity-70 p-8">
            <h1 className="mb-4 text-4xl font-bold">
              Pourquoi souscrire à une assurance éducation pour vos enfants ?
            </h1>
            <p className="text-lg">
            souscrire à une assurance éducation peut présenter plusieurs
              avantages.
            </p>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="mx-auto grid max-w-[1300px] gap-6 p-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {educationInsuranceAdvantages.map((advantage) => (
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
      <Footer />
    </>
  );
};

export default AdvantagesList;
