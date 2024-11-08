import React from "react";
import Photo from "../assets/retraite.png";

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
    <path
      d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 11V15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6V12L16 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PiggyBankIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
    <path
      d="M19 5C19 3.89543 18.1046 3 17 3C15.8954 3 15 3.89543 15 5M19 5C19 6.10457 18.1046 7 17 7C15.8954 7 15 6.10457 15 5M19 5H15M7 8C4.23858 8 2 10.2386 2 13C2 15.7614 4.23858 18 7 18M7 8H13M7 8V18M7 18H13M13 8C15.7614 8 18 10.2386 18 13C18 15.7614 15.7614 18 13 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="10" cy="12" r="1" fill="currentColor" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PensionSection = () => {
  const benefits = [
    {
      title: "Sécurité financière",
      description:
        "Elle garantit un revenu régulier après la cessation d'activité professionnelle, permettant de maintenir un niveau de vie confortable.",
      icon: <ShieldIcon />,
    },
    {
      title: "Préparation à l'avenir",
      description:
        "Anticiper les besoins financiers pour la retraite aide à éviter les difficultés économiques pendant cette période.",
      icon: <ClockIcon />,
    },
    {
      title: "Économie d'impôt",
      description:
        "Économie d'impôt consiste à utiliser légalement les dispositifs fiscaux (déductions, crédits d'impôt, exonérations) pour réduire la charge fiscale d'une entreprise ou d'un particulier, tout en respectant la législation en vigueur. Contrairement à l'évasion fiscale, qui est illégale, l'objectif est d'optimiser la fiscalité en profitant des avantages légaux disponibles",
      icon: <PiggyBankIcon />,
    },
  ];
  const faqs = [
    {
      question: "Quand puis-je commencer à cotiser pour ma retraite?",
      answer: "Il est recommandé de commencer dès le début de votre carrière pour maximiser les avantages à long terme.",
    },
    {
      question: "Puis-je retirer de l'argent avant l'âge de la retraite?",
      answer: "Cela dépend du type de régime de retraite, mais des pénalités peuvent s'appliquer pour les retraits anticipés.",
    },
    {
      question: "Quels sont les avantages fiscaux pour la retraite?",
      answer: "Les cotisations sont souvent déductibles d'impôt, offrant un avantage fiscal immédiat et augmentant les économies.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral">
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <h1 className="mb-6 text-4xl font-bold text-neutral sm:text-5xl">
                Pension/Retraite
              </h1>
              <p className="mb-8 text-lg text-neutral">
                La pension ou retraite est un aspect crucial de la planification
                financière. Voici un aperçu de son importance et des types de
                produits associés.
              </p>
              <a href="#plus">
                <button className="rounded-lg bg-secondary px-8 py-3 font-bold text-neutral transition-colors hover:bg-opacity-90">
                  En savoir plus
                </button>
              </a>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="rounded-lg bg-primary/5 p-8">
                  <img
                    src={Photo}
                    alt="Credit Protection"
                    className="h-full w-full rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-20">
        {/* Benefits Grid */}
        <section className="bg-white" id="plus">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Principaux aspects de la Pension/Retraite
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-lg border border-primary/10 bg-neutral p-8 shadow-lg"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">{benefit.icon}</div>
                <h3 className="mb-3 text-xl text-primary">{benefit.title}</h3>
                <p className="text-textGray">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-16">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold">{faq.question}</h4>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>


        {/* CTA Section */}
       
      </div>
    </div>
  );
};

export default PensionSection;
