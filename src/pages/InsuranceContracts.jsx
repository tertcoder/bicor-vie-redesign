import React from "react";
import Footer from "../sections/accueil/Footer";

// Placeholder icons (you can replace these paths with actual SVG icons)
const LifeInsuranceIcon = () => (
  <svg
    className="h-12 w-12 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M12 2C7.03 2 2 6.48 2 12s5.03 10 10 10 10-4.48 10-10S16.97 2 12 2z"></path>
  </svg>
);
const CreditInsuranceIcon = () => (
  <svg
    className="h-12 w-12 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M18 6L6 18M6 6l12 12"></path>
  </svg>
);
const EducationInsuranceIcon = () => (
  <svg
    className="h-12 w-12 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M12 4.5V12m0 0v7.5m0-7.5l5.25 5.25M12 12l-5.25 5.25"></path>
  </svg>
);
const TontineIcon = () => (
  <svg
    className="h-12 w-12 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M5 13l4 4L19 7"></path>
  </svg>
);
const HealthInsuranceIcon = () => (
  <svg
    className="h-12 w-12 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16z"></path>
  </svg>
);

const InsuranceContracts = () => {
  const contracts = [
    {
      id: 1,
      title: "Assurance Protection Crédit",
      description:
        "La protection crédit est un type d'assurance qui sécurise le remboursement d'un prêt en cas de circonstances imprévues.",
      Icon: LifeInsuranceIcon,
    },
    {
      id: 2,
      title: "Assurance Pension/Retraite",
      description:
        "La pension ou retraite est un aspect crucial de la planification financière. Voici un aperçu de son importance et des types de produits associés.",
      Icon: CreditInsuranceIcon,
    },
    {
      id: 3,
      title: "Assurance Protection Social",
      description:
        "L'assurance protection sociale est un mécanisme de prévoyance qui permet à l'assuré de protéger ses proches contre les aléas de la vie, notamment le risque de décès. En cas de décès de l'assuré, un capital est versé aux bénéficiaires désignés, assurant ainsi une protection financière pour sa famille ou ses proches.",
      Icon: EducationInsuranceIcon,
    },
    {
      id: 4,
      title: "Assurance Education",
      description:
        "L'assurance éducation permet aux parents d'épargner de manière régulière pour les frais d'éducation futurs de leurs enfants, qu'il s'agisse de l'école primaire, du secondaire ou des études supérieures.",
      Icon: TontineIcon,
    },
    {
      id: 5,
      title: "Assurance Tontine",
      description:
        "La tontine consiste en un groupe de personnes qui cotisent régulièrement dans un fonds commun. À la fin d'une période déterminée, les fonds sont redistribués aux participants restants, souvent avec un bonus",
      Icon: HealthInsuranceIcon,
    },
  ];

  return (
    <>
      <div
        className="bg-primary bg-cover bg-center min-h-[800px] text-neutral bg-insurance flex items-center justify-center"
      >
        <div className="rounded-md bg-primary bg-opacity-70 p-8">
          <h1 className="mb-4 text-4xl font-bold">
            Types de contract offert par Bicor Vie
          </h1>
          <p className="text-lg">
            Découvrez les différents types de contrats d'assurance proposés par
            Bicor Vie, adaptés à vos besoins spécifiques.
          </p>
        </div>
      </div>
      <div className="bg-neutral p-6 md:p-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-8 text-center text-3xl font-bold text-primary md:text-4xl">
            Types de contract offert par Bicor Vie
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contracts.map((contract) => (
              <div
                key={contract.id}
                className="flex transform flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg transition-transform hover:scale-105"
              >
                <contract.Icon />
                <h2 className="mb-2 mt-4 text-xl font-semibold text-primary">
                  {contract.title}
                </h2>
                <p className="text-textGray">{contract.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InsuranceContracts;
